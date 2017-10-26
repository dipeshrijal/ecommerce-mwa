import {Component, OnInit} from '@angular/core';
import {UserService} from "../../user/user.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  user;

  constructor(private userService: UserService) {
  }

  ngOnInit() {

    this.userService.user.subscribe(
      user => {
        this.user = user;
      }
    )
  }

  onLogout() {
    this.userService.logout();
  }

}
