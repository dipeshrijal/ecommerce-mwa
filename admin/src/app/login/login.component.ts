import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "./auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: NgForm;                    // {1}
  private formSubmitAttempt: boolean; // {2}

  constructor(      // {3}
    private authService: AuthService // {4}
  ) {}

  ngOnInit() {
  }

}
