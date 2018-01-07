import {Component, ViewEncapsulation, ElementRef} from '@angular/core';

@Component({
  selector: 'c3m-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BtnComponent {

  constructor(private elementRef: ElementRef) {

  }

  public OnClick() {
    alert('My Class is : ' + this.elementRef.nativeElement.className);

  }

}
