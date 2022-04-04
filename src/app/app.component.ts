import { Component } from '@angular/core';
import { tasks } from '../mock/tasks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Liste de tâches';
  tasks = tasks;
}
