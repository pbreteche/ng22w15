import { Injectable } from '@angular/core';
import { tasks as tasksMock } from 'src/mock/tasks';
import { Task } from './task';

const TASKS_ITEM = 'app.tasks';

@Injectable({
  providedIn: 'root'
})
export class TasksStorageService {

  load(): Task[] {
    let taskString = localStorage.getItem(TASKS_ITEM);
    if (!taskString) {
      return tasksMock;
    }
    return JSON.parse(taskString).map((task: Task) => {
      if (task.deadline) {
        task.deadline = new Date(task.deadline)
      }

      return task;
    });
  }

  save(tasks: Task[]) {
    localStorage.setItem(TASKS_ITEM, JSON.stringify(tasks));
  }

  first(): Task {
    let tasks = this.load();

    return tasks[0];
  }

  push(task: Task): void {
    const tasks = this.load();
    tasks.push(task);
    this.save(tasks);
  }
}
