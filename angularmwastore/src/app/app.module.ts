import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CardComponent} from './components/card.component';
import {ModalComponent} from './components/modal.component';
import {NavbarComponent} from './components/navbar.component';
import {SidebarComponent} from './components/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ModalComponent,
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
