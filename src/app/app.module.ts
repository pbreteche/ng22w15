import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import '@angular/common/locales/global/fr';

import { AppComponent } from './component/app.component';
import { DetailComponent } from './component/detail/detail.component';
import { TitleComponent } from './component/title/title.component';
import { ProjectComponent } from './component/project/project.component';
import { CreateTemplateComponent } from './component/create-template/create-template.component';
import { CreateReactiveComponent } from './component/create-reactive/create-reactive.component';
import { MinDateDirective } from './validators/min-date.directive';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { ProjectTaskComponent } from './component/project-task/project-task.component';
import { TrPipe } from './pipe/tr.pipe';
import { HighlightDirective } from './highlight.directive';
import { UnlessDirective } from './unless.directive';
import { KanbanComponent } from './component/kanban/kanban.component';

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
    HomePageComponent,
    ProjectTaskComponent,
    TrPipe,
    HighlightDirective,
    UnlessDirective,
    KanbanComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component: HomePageComponent, pathMatch: 'full'},
      {
        path: 'projet/:project_id',
        component: ProjectComponent,
        children: [
          {path: 'taches', component: ProjectTaskComponent},
          {path: 'tache/nouvelle', component: CreateTemplateComponent},
          {path: 'taches/:id', component: DetailComponent},
        ]
      },
      {path: '**', component: PageNotFoundComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
