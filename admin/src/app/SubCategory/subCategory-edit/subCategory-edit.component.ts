import { CategoryService } from './../../category/category.service';
import { SubCategoryService } from './../sub-category.service';
import {HttpClient} from '@angular/common/http';
import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-subcategory-edit',
  templateUrl: './subcategory-edit.component.html',
  styleUrls: ['./subcategory-edit.component.css']
})
export class SubCategoryEditComponent implements OnInit {
  categories;

  @ViewChild('addSubCategory') form: NgForm;

    constructor(private subcategoryService: SubCategoryService,private categoryService: CategoryService, private router: Router) {
    }
  
    ngOnInit() {
      this.categories = this.categoryService.getCategories();
    }
  
  
    addNewSubCategory() {
      /*
      this.subcategoryService.addSubCategory(this.form.value);
  
      this.router.navigate(['/subcategories']);
      */
      this.subcategoryService.addSubCategory(this.form.value).subscribe(
        data => this.router.navigate(['/subcategories'])
      )

    }


}
