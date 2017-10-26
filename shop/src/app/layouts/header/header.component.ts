import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserService} from "../../user/user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  categories;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get("http://localhost:3000/categoriesdetails").subscribe(
      data => {
        this.categories = data;
      }
    );
  }
}
