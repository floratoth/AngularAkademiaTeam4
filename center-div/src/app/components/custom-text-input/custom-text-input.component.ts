import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-text-input',
  templateUrl: './custom-text-input.component.html',
  styleUrls: ['./custom-text-input.component.scss'],
})
export class CustomTextInputComponent implements OnInit {
  @Input() type?: string
  
  constructor() {}

  ngOnInit(): void {}
}
