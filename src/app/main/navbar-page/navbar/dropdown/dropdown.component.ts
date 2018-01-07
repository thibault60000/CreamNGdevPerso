import {Component, Input, ViewEncapsulation} from '@angular/core';
import {DropdownItemComponent} from './dropdown-item/dropdown-item.component';
import {NavbarComponent} from '../navbar.component';

@Component({
  selector: 'c3m-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DropdownComponent {

    // INPUT
    @Input() isOpen;
    @Input() name;

    // ITEMS
    items: DropdownItemComponent[] = [];


    // CONSTRUCTOR
    constructor(private navbar: NavbarComponent) {
        navbar.addTab(this);
    }

    /* Add Item to a DropdownItem array */
    addTab(item: DropdownItemComponent) {
        this.items.push(item);
    }

    /* Open the dropdown menu */
    openDropdown(){
      if(this.isOpen === true){
          this.navbar.closeAllDropdown();
      }
      else{
          this.navbar.closeAllDropdown();
          this.isOpen = true;
      }
    }

}
