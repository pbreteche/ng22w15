import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Task } from '../../model/task';
import { TasksStorageService } from '../../service/tasks-storage.service';
import { TitleService } from '../../title.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, OnDestroy{
  task?: Task;

  constructor(
    private route: ActivatedRoute, 
    private storage: TasksStorageService,
    private title: TitleService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let idParam = params.get('id');
      if (idParam != null) {
        this.task = this.storage.find(+idParam)
        if (typeof this.task?.name === 'string' ) {
          this.title.defineTitle(this.task.name);
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.title.defineTitle();
  }
}
