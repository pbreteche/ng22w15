import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail.component';
import { TitleComponent } from './title/title.component';
import { NavComponent } from './nav/nav.component';
import { CreateTemplateComponent } from './create-template/create-template.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    TitleComponent,
    NavComponent,
    CreateTemplateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
