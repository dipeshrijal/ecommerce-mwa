import { LoginComponent } from './user/login.component';
import { Routes, RouterModule } from '@angular/router';
import { UserModule } from './user/user.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CardComponent} from './components/card.component';
import {ModalComponent} from './components/modal.component';
import {NavbarComponent} from './components/navbar.component';
import {SidebarComponent} from './components/sidebar.component';

const userRoutes: Routes=[
  { 
    path: 'login', 
    component: LoginComponent
  },
  { 
   // path: 'register', 
    //component: RegisterComponent 
  }


]

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ModalComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(userRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
