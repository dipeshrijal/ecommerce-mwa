import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { RouterModule,Routes,Router }   from '@angular/router';

@Component({
  selector: 'login-user',
  template: `
  <div class="container">
 
  </div>
  `,
  styleUrls: []
})
export class LoginComponent {
  title = "Login";

  

  ngOnInit(): void {
    console.log("in login");
  }

  
}


