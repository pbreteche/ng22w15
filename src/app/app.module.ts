import { InjectionToken, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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
import { TasksStorageService } from './tasks-storage.service';

export const API_HOST_TOKEN = new InjectionToken('app.api_host');

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
  providers: [
    // syntaxe raccourcie si jeton et classe portent la même valeur
    TasksStorageService,
    // instancie un nouveau service à partir de sa def de classe
    {provide: TasksStorageService, useClass: TasksStorageService},
    // référence un service existant à partir de son jeton
    {provide: TasksStorageService, useExisting: TasksStorageService},
    // crée un service à partir d'une valeur déjà prête
    {provide: API_HOST_TOKEN, useValue: '//api.mon-appli.com'},
    // possibilité également de fournir une fonction "factory"
    // qui nous permet de personnaliser la création du service
    {provide: API_HOST_TOKEN, useFactory: () => {
      // traitement à faire pour créer le service
      return '//api.mon-appli.com';
    }}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
