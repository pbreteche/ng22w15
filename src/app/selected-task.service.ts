import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class SelectedTaskService {
  private taskSubject = new ReplaySubject<Task>(1);
  task = this.taskSubject.asObservable();

  select(task: Task) {
    this.taskSubject.next(task);
  }
}
