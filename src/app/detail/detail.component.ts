import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { SelectedTaskService } from '../selected-task.service';
import { Task } from '../task';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  task: Observable<Task>;
  constructor(private selectedTaskService: SelectedTaskService) {
    this.task = selectedTaskService.task;
  }
}
