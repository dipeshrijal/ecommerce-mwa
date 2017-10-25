import {SubCategoryService} from '../sub-category.service';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-subcategory-list',
  templateUrl: './subcategory-list.component.html',
  styleUrls: ['./subcategory-list.component.css']
})
export class SubCategoryListComponent implements OnInit {

  subcategories;

  constructor(private subcategoryService: SubCategoryService) {
  }

  ngOnInit() {
    this.subcategories = this.getSubcategories();
  }

  getSubcategories() {
    this.subcategoryService.getSubCategories().subscribe(
      (response) =>{
        console.log(response);
        this.subcategories = response;
      }
    );
  }

}
