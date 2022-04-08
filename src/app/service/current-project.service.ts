import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { Project } from '../model/project';

@Injectable({
  providedIn: 'root'
})
export class CurrentProjectService {
  private projectSubject = new ReplaySubject<Project>(1);

  get project$(): Observable<Project> {
    return this.projectSubject.asObservable();
  }

  setCurrent(project: Project) {
    this.projectSubject.next(project);
  }
}
