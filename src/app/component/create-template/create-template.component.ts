import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../../model/task';
import { TasksStorageService } from '../../service/tasks-storage.service';

@Component({
  selector: 'app-create-template',
  templateUrl: './create-template.component.html',
  styleUrls: ['./create-template.component.scss']
})
export class CreateTemplateComponent {
  task = new Task();
  now = new Date();

  constructor(
    private tasksStorage: TasksStorageService,
    private router: Router
  ) {}

  save(): void {
    if (this.task.deadline) {
      this.task.deadline = new Date(this.task.deadline);
    }
    this.tasksStorage.push(this.task);
    this.router.navigate(['task', this.task.id]);
    this.task = new Task(); 
  }
}
