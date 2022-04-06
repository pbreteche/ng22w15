import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tasks as tasksMock } from 'src/mock/tasks';
import { Task } from './task';

const TASKS_ITEM = 'app.tasks';
const TASKS_NEXT_ID = 'app.task_next_id';

@Injectable({
  providedIn: 'root'
})
export class TasksStorageService {
  private loaded = false;
  private tasksArray: Task[] = [];
  private tasksSubject = new BehaviorSubject<Task[]>(this.tasksArray);
  
  get tasks() {
    if (!this.loaded) {
      this.load();
      this.loaded = true;
    }

    return this.tasksSubject.asObservable();
  }

  private load() {
    let taskString = localStorage.getItem(TASKS_ITEM);
    if (!taskString) {
      this.tasksArray = tasksMock;
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
    this.save();
  }

  delete(i:number): void {
    this.tasksArray.splice(i, 1);
    this.save();
  }
}
