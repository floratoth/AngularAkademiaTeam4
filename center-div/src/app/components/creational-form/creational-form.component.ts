import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-creational-form',
  templateUrl: './creational-form.component.html',
  styleUrls: ['./creational-form.component.scss'],
})
export class CreationalFormComponent implements OnInit {
  @Input() placeHolder?: string;

  constructor() {}

  ngOnInit(): void {}
}
