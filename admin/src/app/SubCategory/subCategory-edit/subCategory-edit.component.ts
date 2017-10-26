import {Category} from '../../models/Category';
import {CategoryService} from '../../category/category.service';
import {SubCategoryService} from '../sub-category.service';
import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-subcategory-edit',
  templateUrl: './subcategory-edit.component.html',
  styleUrls: ['./subcategory-edit.component.css']
})
export class SubCategoryEditComponent implements OnInit {
  categories: Category[];
  subCategory;

  @ViewChild('addSubCategory') form: NgForm;

  constructor(private subcategoryService: SubCategoryService,
              private categoryService: CategoryService,
              private router: Router,
              private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.getCategories();
    this.getSubcategories();
  }

  getCategories() {
    this.categoryService.getCategories().subscribe(
      (categories: Category[]) => this.categories = categories
    );
  }


  getSubcategories() {
    this.route.params.subscribe(
      (params: Params) => {
        this.subcategoryService.getCategoryById(params['id']).subscribe(
            result => this.subCategory = result
        );
      }
    )
  }


  addNewSubCategory() {
    this.subcategoryService.addSubCategory(this.form.value).subscribe(
      data => this.router.navigate(['/subcategories'])
    )

  }
}
