import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {UserService} from "../user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('form') form: NgForm;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
  }

  login() {
    this.userService.authenticate(this.form.value);
  }

}
