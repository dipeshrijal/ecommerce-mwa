import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthService} from "./auth.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('loginForm') form: NgForm;                    // {1}
  private formSubmitAttempt: boolean; // {2}

  constructor(      // {3}
    private authService: AuthService // {4}
  ) {}

  ngOnInit() {
  }

  onSubmit() {
    if (this.form.valid) {
      this.authService.login(this.form.value); // {7}
    }
    console.log("no login");
    // this.formSubmitAttempt = true;             // {8}
  }

}
