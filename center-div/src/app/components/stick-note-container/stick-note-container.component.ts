import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { INote } from 'src/app/interfaces/note.interface';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-stick-note-container',
  templateUrl: './stick-note-container.component.html',
  styleUrls: ['./stick-note-container.component.scss']
})
export class StickNoteContainerComponent implements OnInit {
  noteList?: INote[];

  constructor(private noteService: NoteService) {
  }

  ngOnInit(): void {
    this.noteService.noteList$.subscribe((data) => {
      this.noteList = data;
    })
  }

}
