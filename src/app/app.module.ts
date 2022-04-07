import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './component/app.component';
import { DetailComponent } from './component/detail/detail.component';
import { TitleComponent } from './component/title/title.component';
import { NavComponent } from './component/nav/nav.component';
import { CreateTemplateComponent } from './component/create-template/create-template.component';
import { CreateReactiveComponent } from './component/create-reactive/create-reactive.component';
import { MinDateDirective } from './validators/min-date.directive';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';

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
    HttpClientModule,
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
