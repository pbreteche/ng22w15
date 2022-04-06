import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Task } from '../task';

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

  get name()  {
    return this.form.get('name')
  }

}
