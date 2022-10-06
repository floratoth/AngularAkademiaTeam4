import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { INote } from '../interfaces/note.interface';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  noteList$: BehaviorSubject<INote[]> = new BehaviorSubject<INote[]>([]);

  constructor() {}

  addNote(note: INote): void {
    let notes = this.noteList$.getValue();
    notes.push(note);
    this.noteList$.next(notes);
  }

}
