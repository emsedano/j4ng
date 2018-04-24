import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  display: boolean = false;
  currentClasses: any = {};
  constructor() { }

  ngOnInit() {
    this.currentClasses  = {
      yellow: true,
      green: false,
    };
  }
  updateColor(color): void {
    this.currentClasses  = {
      yellow: color === 'yellow',
      green: color === 'green',
    };
  }

  toogleDisplay(): void {
    this.display = !this.display;
  }
}
