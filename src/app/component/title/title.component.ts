import { Component } from '@angular/core';
import { TitleService } from '../../title.service';

@Component({
  selector: 'app-title',
  template: '<h1>{{ title }}</h1>',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {
  title = '';

  constructor(titleService: TitleService) {
    titleService.title.subscribe(title => this.title = title)
  }
}
