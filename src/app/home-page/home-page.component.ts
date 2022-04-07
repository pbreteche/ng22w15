import { Component } from '@angular/core';
import { Project } from '../model/project';
import { ProjectsStorageService } from '../service/projects-storage.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  projects: Project[] = [];

  constructor(storage: ProjectsStorageService) {
    storage.projects$.subscribe(p => this.projects = p);
  }
}
