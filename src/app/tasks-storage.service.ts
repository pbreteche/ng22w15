import { Injectable } from '@angular/core';
import { tasks as tasksMock } from 'src/mock/tasks';

const TASKS_ITEM = 'app.tasks';

@Injectable({
  providedIn: 'root'
})
export class TasksStorageService {

  load(): string[] {
    let taskString = localStorage.getItem(TASKS_ITEM);
    if (!taskString) {
      return tasksMock;
    }
    return JSON.parse(taskString);
  }

  save(tasks: string[]) {
    localStorage.setItem(TASKS_ITEM, JSON.stringify(tasks));
  }
}
