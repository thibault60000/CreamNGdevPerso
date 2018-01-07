import {Component, Input, ViewEncapsulation} from '@angular/core';
import {DropdownComponent} from '../dropdown.component';
import {AppComponent} from '../../../../../app.component';

@Component({
  selector: 'c3m-dropdown-item',
  templateUrl: './dropdown-item.component.html',
  styleUrls: ['./dropdown-item.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DropdownItemComponent{

  @Input() name;
  @Input() idItem: number;
  @Input() route;

    constructor(dropdown: DropdownComponent, app: AppComponent) {
      dropdown.addTab(this);
      this.idItem = app.randomID();
  }

}
