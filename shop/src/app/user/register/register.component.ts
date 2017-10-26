import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {UserService} from "../user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @ViewChild('register') registerData: NgForm;
  message: string;

  constructor(private userService: UserService,
              private router: Router) {
  }

  ngOnInit() {
  }

  registerUser() {
    this.userService.createUser(this.registerData.value).subscribe(
      result => {
        this.router.navigate(['/login']);
      }
    );
  }

}
