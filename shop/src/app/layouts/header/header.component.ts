import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserService} from "../../user/user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  categories;
  user;
  shoppingcarts;

  constructor(private http: HttpClient,
              private userService: UserService) {
  }

  ngOnInit() {
    this.getUser();
    this.http.get("http://localhost:3000/categoriesdetails").subscribe(
      data => {
        this.categories = data;
      }
    );

    this.http.get("http://localhost:3000/shoppingcarts/user/59f143f726f96d1466106a1e")
      .subscribe(
        data => {
          this.shoppingcarts = data;
        }
      );
  }

  getUser() {
    this.userService.user.subscribe(
      user => {
        this.user = user;
      }
    );
  }
}
