import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { INote } from '../interfaces/note.interface';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  noteListSubject: BehaviorSubject<INote[]> = new BehaviorSubject<INote[]>([]);

  constructor() {}


}
