import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, firstValueFrom, map, Observable, throwError } from 'rxjs';
import { Task } from '../model/task';

@Injectable({
  providedIn: 'root'
})
export class TaskHttpService {

  constructor(private http: HttpClient) { }

  load(): Observable<Task[]> {
    return this.http.get('/assets/tasks.json')
      .pipe(
        map((data: any) => data.map((task: Task) => {
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
    ;
  }

  async loadWithPromise(): Promise<Task[]> {
    const data: any = await firstValueFrom(this.http.get('/assets/tasks.json'));
    return data.map((task: Task) => {
      if (task.deadline) {
        task.deadline = new Date(task.deadline);
      }

      return task;
    });
  }

  post(task: Task) {
    this.http.post('/api/endpoint', task)
      .pipe(catchError((err: HttpErrorResponse) => {
        return throwError(() => new Error(`Cannot save this task ${task.name} : ${err.message}`));
      }))
      .subscribe() // Nécessaire pour le déclenchement de la requête HTTP
    ;
  }
}
