import { LoginComponent } from './login.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes }   from '@angular/router';

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
   LoginComponent,
    //RegisterComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forChild(userRoutes)
  ],
  providers: [
    //UserService
  ],

})
export class UserModule { }
