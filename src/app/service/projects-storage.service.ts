import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { projectsMock } from 'src/mock/projects';
import { Project } from '../model/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsStorageService {
  private loaded = false;
  private projectsArray: Project[] = [];
  private projectsSubject = new BehaviorSubject<Project[]>(this.projectsArray);

  
  get projects$() {
    if (!this.loaded) {
      this.load();
      this.loaded = true;
    }

    return this.projectsSubject.asObservable();
  }

  private load() {
    this.projectsArray = projectsMock;
    this.projectsSubject.next(this.projectsArray);
  }
}
