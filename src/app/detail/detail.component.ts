import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Task } from '../task';
import { TasksStorageService } from '../tasks-storage.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit{
  task?: Task;

  constructor(
    private route: ActivatedRoute, 
    private storage: TasksStorageService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let idParam = params.get('id');
      if (idParam != null) {
        this.task = this.storage.find(+idParam)
      }
    });
  }
}
