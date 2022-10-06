import { Component, OnInit, Input } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-creational-form',
  templateUrl: './creational-form.component.html',
  styleUrls: ['./creational-form.component.scss'],
})
export class CreationalFormComponent implements OnInit {
  noteForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.noteForm = fb.group({
      content: ['', [Validators.required]],
      color: ['', [Validators.required]],
    });
  }

  get content(): FormControl {
    return this.noteForm.get('content') as FormControl;
  }
  get color(): FormControl {
    return this.noteForm.get('color') as FormControl;
  }

  handleSubmit() {
    console.log(this.noteForm);
  }
  ngOnInit(): void {}
}
