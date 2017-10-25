import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../login/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.user.subscribe(
      per =>this.user = per
    );
  }

  onLogout() {
    this.authService.logout();
  }

}
