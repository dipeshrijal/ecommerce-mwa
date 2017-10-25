import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  categories;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get("http://localhost:3000/categories/details").subscribe(
      data => {
        this.categories = data;
        // console.log(data[0].subcategories[0].name)

      }
    );
  }

  //categories/details

}
