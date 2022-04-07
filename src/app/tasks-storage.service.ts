import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, of } from 'rxjs';
import { tasksMock } from 'src/mock/tasks';
import { Task } from './task';
import { TaskHttpService } from './task-http.service';

const TASKS_ITEM = 'app.tasks';
const TASKS_NEXT_ID = 'app.task_next_id';

@Injectable({
  providedIn: 'root'
})
export class TasksStorageService {
  private loaded = false;
  private tasksArray: Task[] = [];
  private tasksSubject = new BehaviorSubject<Task[]>(this.tasksArray);

  constructor(private http: TaskHttpService) {}
  
  get tasks() {
    if (!this.loaded) {
      this.load();
      this.loaded = true;
    }

    return this.tasksSubject.asObservable();
  }

  private async loadWithPromise() {
    this.tasksArray = await this.http.loadWithPromise();
  }

  private load() {
    let taskString = localStorage.getItem(TASKS_ITEM);
    if (!taskString) {
      this.http.load()
        .pipe(catchError((error: Error) => of(tasksMock)))
        .subscribe(tasks => {
          this.tasksArray = tasks
          this.tasksSubject.next(this.tasksArray);
        })
      ;

      localStorage.setItem(TASKS_NEXT_ID, '5');
    } else {
      this.tasksArray = JSON.parse(taskString).map((task: Task) => {
        if (task.deadline) {
          task.deadline = new Date(task.deadline)
        }
  
        return task;
      });
    }
    this.tasksSubject.next(this.tasksArray);
  }

  private save() {
    localStorage.setItem(TASKS_ITEM, JSON.stringify(this.tasksArray));
    this.tasksSubject.next(this.tasksArray);
  }

  find(id: number): Task | undefined {
    if (!this.loaded) {
      this.load();
      this.loaded = true;
    }

    return this.tasksArray.find(task => task.id == id);
  }

  push(task: Task): void {
    let nextId = localStorage.getItem(TASKS_NEXT_ID);
    task.id = nextId ? +nextId : 1;
    this.tasksArray.push(task);
    localStorage.setItem(TASKS_NEXT_ID, '' + (task.id + 1))
    this.http.post(task);
    this.save();
  }

  delete(i:number): void {
    this.tasksArray.splice(i, 1);
    this.save();
  }
}
