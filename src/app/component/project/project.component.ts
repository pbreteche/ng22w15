import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Project } from 'src/app/model/project';
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
    private title: TitleService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let idParam = params.get('project_id');
      console.log(idParam);
      
      if (idParam != null) {
        this.http.find(+idParam).subscribe((project: Project) => this.project = project);
        if (typeof this.project?.title === 'string' ) {
          this.title.defineTitle(this.project.title);
        }
      }
    });
  }
}
