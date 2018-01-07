import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'c3m-modal-page',
  templateUrl: './modal-page.component.html',
  styleUrls: ['./modal-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ModalPageComponent implements OnInit {

  @ViewChild(ModalComponent) modal: ModalComponent;

  constructor() { }

  ngOnInit() {
  }

    public OpenModal() {
        this.modal.ToggleOpen();
    }

}
