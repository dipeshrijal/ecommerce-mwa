import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {UserService} from "../user.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @ViewChild('register') registerData: NgForm;
  message: string;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
  }

  registerUser() {
    this.userService.createUser(this.registerData.value).subscribe(
      result => this.message = "User Created Successfully"
    );
  }

}
