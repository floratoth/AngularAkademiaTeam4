import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  noteList: string[] = [
    'I am a sticky note!',
    'Short sticky',
    'I am a very very very very very very very long sticky note',
    'Another boring sticky note for today',
  ];

  constructor() {}
}
