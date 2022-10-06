import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-stick-note-container',
  templateUrl: './stick-note-container.component.html',
  styleUrls: ['./stick-note-container.component.scss']
})
export class StickNoteContainerComponent implements OnInit {

  constructor(private noteService: NoteService) {
  }

  ngOnInit(): void {
  }

}
