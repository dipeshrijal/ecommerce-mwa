import {Category} from '../../models/Category';
import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../category.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories: Category[];

  constructor(private categoryService: CategoryService,
              private router: Router) {
  }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getCategories().subscribe(
      (response: Category[]) => this.categories = response
    )
  }

  onEdit(category) {
    this.router.navigate(['/categories/' + category._id]);
  }

  onDelete(category) {
    this.categoryService.deleteCategory(category._id)
      .subscribe(
        result => {
          let index = this.categories.indexOf(category, 0);
          if (index > -1) {
            this.categories.splice(index, 1);
          }
        }
      );
  }


}
