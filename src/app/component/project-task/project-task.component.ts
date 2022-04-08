import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/model/project';
import { CurrentProjectService } from 'src/app/service/current-project.service';

@Component({
  selector: 'app-project-task',
  templateUrl: './project-task.component.html',
  styleUrls: ['./project-task.component.scss']
})
export class ProjectTaskComponent implements OnInit {
  project?: Project;

  constructor(
    private currentProject: CurrentProjectService
  ) { }

  ngOnInit(): void {
    this.currentProject.project$.subscribe(project => this.project = project);
  }

}
