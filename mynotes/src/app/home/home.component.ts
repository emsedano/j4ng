import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Input() appTitle: string;
  @Output() newAppTitleEvent: EventEmitter<string> = new EventEmitter();

  buttonText: string = 'Submit note';
  notes: any[] = [
    {title: 'change permissions linux', text: 'chmod 755 -R /folder/path'}
  ];

  note: any = { title: '', text: '' };

  constructor() { }

  ngOnInit() {
  }

  addNote(): void {
    this.notes.push({...this.note});
    this.note = {title: '', text: ''};
  }

  destroyNote(index): void {
    console.log('destroying => ', index);
    this.notes.splice(index, 1);
  }

  updateFromChildToParent(): void {
    console.log('sending from child');
    this.newAppTitleEvent.emit('Coming from child');
  }

}
