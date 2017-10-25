import { Category } from './../../models/Category';
import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../category.service";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories:Category[];

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getCategories().subscribe(
      (response:Category[]) => this.categories = response
    )
  }


}
