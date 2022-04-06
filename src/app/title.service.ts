import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

const DEFAULT_TITLE = 'Gestionnaire de tâches';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  private titleSubject = new BehaviorSubject<string>(DEFAULT_TITLE);

  get title(): Observable<string> {
    return this.titleSubject.asObservable();
  }

  defineTitle(title?: string) {
    this.titleSubject.next(title || DEFAULT_TITLE);
  }
}
