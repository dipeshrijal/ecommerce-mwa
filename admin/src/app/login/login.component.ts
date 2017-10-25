import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthService} from "./auth.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('loginForm') form: NgForm;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.form.valid) {
      this.authService.login(this.form.value);
    } else {
      console.log("no login");
    }
  }

}
