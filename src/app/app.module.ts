import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail.component';
import { TitleComponent } from './title/title.component';
import { NavComponent } from './nav/nav.component';
import { CreateTemplateComponent } from './create-template/create-template.component';
import { CreateReactiveComponent } from './create-reactive/create-reactive.component';
import { MinDateDirective } from './min-date.directive';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    TitleComponent,
    NavComponent,
    CreateTemplateComponent,
    CreateReactiveComponent,
    MinDateDirective,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component: NavComponent, pathMatch: 'full'},
      {path: 'task/new', component: CreateTemplateComponent, pathMatch: 'full'},
      {path: 'task/:id', component: DetailComponent, pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
