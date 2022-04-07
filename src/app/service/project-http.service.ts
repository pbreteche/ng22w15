import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../model/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectHttpService {

  constructor(private http: HttpClient) { }

  all(): Observable<Project[]> {
    return this.http.get('/assets/projects.json') as Observable<Project[]>;
  }

  find(id: number): Observable<Project> {
    return this.http.get(`/assets/project${id}.json`) as Observable<Project>;
  }
}
