import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Project } from 'src/app/model/project';
import { CurrentProjectService } from 'src/app/service/current-project.service';
import { ProjectHttpService } from 'src/app/service/project-http.service';
import { TitleService } from 'src/app/title.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit{
  project?: Project;

  constructor(
    private http: ProjectHttpService,
    private route: ActivatedRoute,
    private title: TitleService,
    private currentProject: CurrentProjectService
  ) {}

  ngOnInit(): void {
    this.currentProject.project$.subscribe(project => this.project = project);
    this.route.paramMap.subscribe((params: ParamMap) => {
      let idParam = params.get('project_id');
      
      if (idParam != null) {
        this.http.find(+idParam).subscribe((project: Project) => this.currentProject.setCurrent(project));
        if (typeof this.project?.title === 'string' ) {
          this.title.defineTitle(this.project.title);
        }
      }
    });
  }
}
