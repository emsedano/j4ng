import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoteService } from '../note.service';
@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  display: boolean = false;
  currentClasses: any = {};
  currentNote: number;
  notes: any;
  filteredNotes: any;
  constructor(private route: ActivatedRoute, private _data:  NoteService) {
    this.route.params.subscribe(data => this.currentNote = data.id);
  }

  ngOnInit() {
    this.currentClasses  = {
      yellow: true,
      green: false,
    };
    this._data.observableNotes.subscribe(x => this.notes = x);
    this.filteredNotes = this.notes;
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

  filterNotes(qryStr) {
    qryStr = qryStr.toLowerCase();
    this.filteredNotes = this.notes.filter(this.byTitleAndText.bind(this, qryStr));
  }

  private byTitleAndText(qry, note) {
    return (note.title.toLowerCase().indexOf(qry) > -1
    || note.text.toLowerCase().indexOf(qry) > -1);
  }
}
