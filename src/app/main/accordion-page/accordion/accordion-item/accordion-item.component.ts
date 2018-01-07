import { Component, ViewEncapsulation, Input, OnChanges, SimpleChanges, OnDestroy, AfterViewInit, OnInit } from '@angular/core';
import { AccordionComponent } from '../accordion.component';

@Component({
  selector: 'c3m-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AccordionItemComponent implements OnDestroy, OnChanges, AfterViewInit, OnInit {

  @Input() nameButton: string;
  @Input() urlImage: string;
  @Input() isOpen: boolean;
  @Input() index: number;
  tabID: string;
  panelID: string;

  /* By default , add item to accordion */
  constructor(private accordion: AccordionComponent) {
    this.accordion.addGroup(this);
  }

  /* remove item to accordion*/
  ngOnDestroy() {
    this.accordion.removeGroup(this);
  }

  /* changes */
  ngOnChanges(changes: SimpleChanges) {
    for (const change in changes) {
      if (changes.hasOwnProperty(change)) {
        const changedProp = changes[change];

        if (!changedProp.isFirstChange()) {
          this.accordion.groups[this.index + 1].toggleOpen();
        }
      }
    }
  }

  /* initialisation */
  ngOnInit() {
    this.tabID = 'tab' + this.index;
    this.panelID = 'panel' + this.index;
  }

  /* when view init */
  ngAfterViewInit() {
    this.tabID = 'tab' + this.index;
    this.panelID = 'panel' + this.index;
  }


  /* open accordion'element */
  toggleOpen(): void {
    if (!this.isOpen) {
      this.isOpen = true;
      this.accordion.closeOthers(this);
    } else if (this.isOpen) {
      this.accordion.closeAll(this);
    }
  }
}
