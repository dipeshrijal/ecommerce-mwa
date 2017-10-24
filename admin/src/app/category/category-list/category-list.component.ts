import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CategoryService} from "../category.service";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories;

  constructor(private categoryService: CategoryService,
              private http: HttpClient) { }

  ngOnInit() {
    this.categories = this.getCategories();
  }

  getCategories() {
    this.http.get('http://localhost:3000/categories').subscribe(
      (response)  => this.categories = response
    );
  }

}
