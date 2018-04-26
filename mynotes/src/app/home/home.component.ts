import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { NoteService } from '../note.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Input() appTitle: string;
  @Output() newAppTitleEvent: EventEmitter<string> = new EventEmitter();

  buttonText: string = 'Submit note';
  notes = [];

  note: any = { title: '', text: '' };
  aServiceValue;
  constructor(private _data: NoteService) {
  }

  ngOnInit() {
    this._data.observableNotes.subscribe(xs => this.notes = xs);
    this._data.setNotes(this.notes);
  }

  addNote(): void {
    this.notes.push({...this.note});
    this.note = {title: '', text: ''};
    this._data.setNotes(this.notes);
  }

  destroyNote(index): void {
    console.log('destroying => ', index);
    this.notes.splice(index, 1);
    this._data.setNotes(this.notes);
  }

  updateFromChildToParent(): void {
    console.log('sending from child');
    this.newAppTitleEvent.emit('Coming from child');
  }

}
