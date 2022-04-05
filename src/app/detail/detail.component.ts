import { Component } from '@angular/core';
import { SelectedTaskService } from '../selected-task.service';
import { Task } from '../task';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  task?: Task;
  constructor(selectedTaskService: SelectedTaskService) {
    selectedTaskService.task.subscribe( task => this.task = task);
  }
}
