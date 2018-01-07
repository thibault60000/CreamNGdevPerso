import { Component, Input, AfterViewChecked, ViewChild } from '@angular/core';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewChecked {
  title = 'app';

  @ViewChild(HeaderComponent) header: HeaderComponent;


  // Initialise Code-Prettify
  PR = window['PR'];

 // Function create random ID for Accessibility
 public randomID() {
    const idRandom = Math.round(Math.random() * (20000 - 1) + 1);
    return idRandom;
  }

  // After View Checked
  public ngAfterViewChecked() {
      // Launch Code-Prettify
      this.PR.prettyPrint();
  }


  public CallToggleMenuBurger() {
    this.header.ToggleMenuBurgerMain();
  }

}

