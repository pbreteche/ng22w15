import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskHttpService {

  constructor(private http: HttpClient) { }

  load(): Observable<Task[]> {
    return this.http.get('/assets/tasks.json')
      .pipe(map((data: any) => data.map((task: Task) => {
        if (task.deadline) {
          task.deadline = new Date(task.deadline)
        }
  
        return task;
      })))
  }
}
