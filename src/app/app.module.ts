import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { AccueilComponent } from './main/accueil/accueil.component';
import { AccordionComponent } from './main/accordion-page/accordion/accordion.component';
import { AccordionItemComponent } from './main/accordion-page/accordion/accordion-item/accordion-item.component';
import { RouterModule, Routes } from '@angular/router';
import { BtnComponent } from './main/button-page/btn/btn.component';
import { TabsComponent } from './main/tabs-page/tabs/tabs.component';
import { TabComponent } from './main/tabs-page/tabs/tab/tab.component';
import { ButtonPageComponent } from './main/button-page/button-page.component';
import { TabsPageComponent } from './main/tabs-page/tabs-page.component';
import { AccordionPageComponent } from './main/accordion-page/accordion-page.component';
import { MenuComponent } from './header/menu/menu.component';
import { MenuItemComponent} from './header/menu/menu-item/menu-item.component';
import { BtnFileComponent } from './main/button-page/btn-file/btn-file.component';
import { BtnSubmitComponent } from './main/button-page/btn-submit/btn-submit.component';
import { CarouselPageComponent } from './main/carousel-page/carousel-page.component';
import { ModalPageComponent } from './main/modal-page/modal-page.component';
import { ModalComponent } from './main/modal-page/modal/modal.component';
import { ModalAlertComponent } from './main/modal-page/modal-alert/modal-alert.component';
import { CarouselComponent } from './main/carousel-page/carousel/carousel.component';
import { CarouselItemComponent } from './main/carousel-page/carousel/carousel-item/carousel-item.component';
import { TablePageComponent } from './main/table-page/table-page.component';
import { ColumnTableComponent } from './main/table-page/column-table/column-table.component';
import { ToggleTableComponent } from './main/table-page/toggle-table/toggle-table.component';
import { PageSwipeTableComponent } from './main/table-page/page-swipe-table/page-swipe-table.component';
import { PaginationPageComponent } from './main/pagination-page/pagination-page.component';
import { PaginationComponent } from './main/pagination-page/pagination/pagination.component';
import {PagerService} from './main/pagination-page/pagination/pager.service';
import { NavbarPageComponent } from './main/navbar-page/navbar-page.component';
import { NavbarComponent } from './main/navbar-page/navbar/navbar.component';
import { DropdownComponent } from './main/navbar-page/navbar/dropdown/dropdown.component';
import { DropdownItemComponent } from './main/navbar-page/navbar/dropdown/dropdown-item/dropdown-item.component';

export const appRoutes: Routes = [
  { path: 'accueil', component: AccueilComponent, data: { title: 'Accueil' } },
  { path: 'button', component: ButtonPageComponent, data: { title: 'Button' } },
  { path: 'tabs', component: TabsPageComponent, data: { title: 'Tabs' } },
  { path: 'accordion', component: AccordionPageComponent, data: { title: 'Accordion' } },
  { path: 'modal', component: ModalPageComponent, data: { title: 'modal' } },
  { path: 'carousel', component: CarouselPageComponent, data: { title: 'carousel' } },
  { path: 'table', component: TablePageComponent, data: { title: 'table' } },
  { path: 'pagination', component: PaginationPageComponent, data: { title: 'pagination' } },
  { path: 'navbar', component: NavbarPageComponent, data: { title: 'navbar' } },
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  //  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    AccueilComponent,
    AccordionComponent,
    AccordionItemComponent,
    BtnComponent,
    TabsComponent,
    TabComponent,
    ButtonPageComponent,
    TabsPageComponent,
    AccordionPageComponent,
    MenuComponent,
    MenuItemComponent,
    BtnFileComponent,
    BtnSubmitComponent,
    CarouselPageComponent,
    ModalPageComponent,
    ModalComponent,
    ModalAlertComponent,
    CarouselComponent,
    CarouselItemComponent,
    TablePageComponent,
    ColumnTableComponent,
    ToggleTableComponent,
    PageSwipeTableComponent,
    PaginationPageComponent,
    PaginationComponent,
    NavbarPageComponent,
    NavbarComponent,
    DropdownComponent,
    DropdownItemComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  schemas: [NO_ERRORS_SCHEMA],
  exports: [RouterModule],
  providers: [
      PagerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
