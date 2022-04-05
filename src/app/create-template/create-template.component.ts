import { Component } from '@angular/core';
import { Task } from '../task';
import { TasksStorageService } from '../tasks-storage.service';

@Component({
  selector: 'app-create-template',
  templateUrl: './create-template.component.html',
  styleUrls: ['./create-template.component.scss']
})
export class CreateTemplateComponent {
  task = new Task();

  constructor(private tasksStorage: TasksStorageService) {}

  save(): void {
    this.tasksStorage.push(this.task);
    this.task = new Task();
  }

}
