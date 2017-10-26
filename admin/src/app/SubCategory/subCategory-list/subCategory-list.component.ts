import {Router} from "@angular/router";
import { Subcategory } from './../../models/SubCategory';
import {SubCategoryService} from '../sub-category.service';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-subcategory-list',
  templateUrl: './subcategory-list.component.html',
  styleUrls: ['./subcategory-list.component.css']
})
export class SubCategoryListComponent implements OnInit {

  subcategories:Subcategory[];

  constructor(private subcategoryService: SubCategoryService,
  private router: Router) {
  }

  ngOnInit() {
    this.getSubcategories();
  }

  onDelete(subCategory) {
    this.subcategoryService.deleteSubCat(subCategory._id).subscribe(
      result => {
        this.router.navigate(['/subcategories']);
      }
    );
  }

  onEdit(subCategory) {
    this.router.navigateByUrl('/subcategories/' + subCategory._id);
  }

  getSubcategories() {
    this.subcategoryService.getSubCategories().subscribe(
      (response:Subcategory[]) =>{
        this.subcategories = response;
      }
    );
  }

}
