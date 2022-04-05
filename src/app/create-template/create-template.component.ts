import { Component } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-create-template',
  templateUrl: './create-template.component.html',
  styleUrls: ['./create-template.component.scss']
})
export class CreateTemplateComponent {
  task = new Task();

}
