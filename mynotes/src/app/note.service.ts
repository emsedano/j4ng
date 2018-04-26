import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class NoteService {

  private notesSubject = new BehaviorSubject<any>([
    { title: 'My first note', text: 'Muy interesante'},
    { title: 'My second note', text: 'Poco interesante'}
  ]);
  observableNotes = this.notesSubject.asObservable();

  constructor() {
  }

  setNotes(newNotes) {
    this.notesSubject.next(newNotes);
  }
}
