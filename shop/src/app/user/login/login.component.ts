import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {UserService} from "../user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('form') form: NgForm;

  message: string;

  constructor(private userService: UserService,
              private router: Router) {
  }

  ngOnInit() {
  }

  login() {
    this.userService.authenticate(this.form.value);
  }

}
