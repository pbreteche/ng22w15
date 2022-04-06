import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SelectedTaskService } from '../selected-task.service';
import { Task } from '../task';
import { TasksStorageService } from '../tasks-storage.service';

@Component({
  selector: 'app-create-reactive',
  templateUrl: './create-reactive.component.html',
  styleUrls: ['./create-reactive.component.scss']
})
export class CreateReactiveComponent {
  form = new FormGroup({
    name: new FormControl('', [
      Validators.required, 
      Validators.minLength(5), 
      Validators.pattern(/[A-Z].+/)
    ]),
    deadline: new FormControl(''),
    description: new FormControl('')
  })

  constructor(
    private tasksStorage: TasksStorageService,
    private selectedTask: SelectedTaskService
  ) {}

  get name()  {
    return this.form.get('name')
  }

  save(): void {
    const task = new Task();
    Object.assign(task, this.form.value);
    if (task.deadline) {
      task.deadline = new Date(task.deadline);
    }
    this.tasksStorage.push(task);
    this.selectedTask.select(task);
    this.form.reset();
  }
}
