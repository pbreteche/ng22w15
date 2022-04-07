import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './component/app.component';
import { DetailComponent } from './component/detail/detail.component';
import { TitleComponent } from './component/title/title.component';
import { ProjectComponent } from './component/project/project.component';
import { CreateTemplateComponent } from './component/create-template/create-template.component';
import { CreateReactiveComponent } from './component/create-reactive/create-reactive.component';
import { MinDateDirective } from './validators/min-date.directive';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { HomePageComponent } from './component/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    TitleComponent,
    ProjectComponent,
    CreateTemplateComponent,
    CreateReactiveComponent,
    MinDateDirective,
    PageNotFoundComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component: HomePageComponent, pathMatch: 'full'},
      {path: 'projet/:project_id', component: ProjectComponent, pathMatch: 'full'},
      {path: 'projet/:project_id/task/new', component: CreateTemplateComponent, pathMatch: 'full'},
      {path: 'projet/:project_id/task/:id', component: DetailComponent, pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
