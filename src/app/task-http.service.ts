import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
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
      })),
      catchError((err: HttpErrorResponse) => {
        if (404 == err.status) {
          return throwError(() => new Error('La ressource n\'a pas été trouvée.'));
        }

        return throwError(() => new Error('Une erreur s\'est produite.'));
      })
      )
  }
}
