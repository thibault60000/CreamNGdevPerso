import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'c3m-btn-submit',
  templateUrl: './btn-submit.component.html',
  styleUrls: ['./btn-submit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BtnSubmitComponent {

  constructor() { }

  @Input() inputValue: string;
}
