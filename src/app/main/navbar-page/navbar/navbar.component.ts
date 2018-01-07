import {
    Component, ViewEncapsulation, ElementRef, ViewChildren, QueryList, ChangeDetectorRef, HostListener,
    AfterViewInit, ContentChild, TemplateRef
} from '@angular/core';
import {DropdownComponent} from './dropdown/dropdown.component';

@Component({
  selector: 'c3m-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class NavbarComponent implements AfterViewInit {

    /* List of Nav Items */
    @ViewChildren('navItems') itemsElement: QueryList<ElementRef>;

    dropdowns: DropdownComponent[]=[];

    /* Variables */
    isOver: boolean;
    widthBreak: number;
    sizeInit = 0;
    isOpen = false;

    /* Resize breakpoint tab */
    @HostListener('window:resize', ['$event'])
    onResize(event) {
        if ( this.itemsElement.last.nativeElement.offsetTop > this.itemsElement.first.nativeElement.offsetTop ) {

            if ( (this.itemsElement.last.nativeElement.offsetTop > this.itemsElement.first.nativeElement.offsetTop) &&  (this.isOver !== true) ) {
                this.widthBreak = event.target.innerWidth;
                this.isOver = true;
            }

            if (this.widthBreak) {
                if ( (event.target.innerWidth > this.widthBreak) && (this.isOver === true) ) {
                    this.isOver = false;
                }

            } else {
                this.widthBreak = this.sizeInit;
                if ( event.target.innerWidth >= this.widthBreak ) {
                    this.isOver = false;
                }
            }
        } else {
            this.isOver = false;
        }
        this.cdr.detectChanges();
    }

    toggleBurger() {
        if (this.isOpen === true) {
            this.isOpen = false;
        } else if (this.isOpen === false) {
            this.isOpen = true;
        }
    }

    /* Resize auto page load */
    ngAfterViewInit(): void {
        if ( this.itemsElement.last.nativeElement.offsetTop > this.itemsElement.first.nativeElement.offsetTop ) {

            if ( (this.itemsElement.last.nativeElement.offsetTop > this.itemsElement.first.nativeElement.offsetTop) &&  (this.isOver !== true) ) {
                this.widthBreak = window.innerWidth;
                this.isOver = true;

            }

            if (this.widthBreak) {
                if ( (window.innerWidth > this.widthBreak) && (this.isOver === true) ) {
                    this.isOver = false;
                }

            } else {
                this.widthBreak = this.sizeInit;
                if ( window.innerWidth >= this.widthBreak ) {
                    this.isOver = false;
                }
            }
        } else {
            this.isOver = false;
        }
        this.cdr.detectChanges();
    }

    /* constructor navbar */
    constructor(private cdr: ChangeDetectorRef) {

    }

    closeAllDropdown(){
        this.dropdowns.forEach((DropdownComponent) => {
            DropdownComponent.isOpen = false;
        });
    }

    addTab(dropdown: DropdownComponent){
        this.dropdowns.push(dropdown);
    }

}
