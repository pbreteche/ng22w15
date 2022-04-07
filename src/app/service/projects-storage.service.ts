import { Injectable } from '@angular/core';
import { BehaviorSubject, find } from 'rxjs';
import { projectsMock } from 'src/mock/projects';
import { Project } from '../model/project';
import { ProjectHttpService } from './project-http.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectsStorageService {
  private loaded = false;
  private projectsArray: Project[] = [];
  private projectsSubject = new BehaviorSubject<Project[]>(this.projectsArray);

  constructor(private http: ProjectHttpService) {}
  
  get projects$() {
    if (!this.loaded) {
      this.load();
      this.loaded = true;
    }

    return this.projectsSubject.asObservable();
  }

  private load() {
    this.http.all().subscribe((projects: Project[]) => {
      this.projectsArray = projects;
      this.projectsSubject.next(this.projectsArray);
    })
  }
}
