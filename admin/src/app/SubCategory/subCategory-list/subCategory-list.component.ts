import { HttpClient } from '@angular/common/http';
import { SubCategoryService } from './../sub-category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subcategory-list',
  templateUrl: './subcategory-list.component.html',
  styleUrls: ['./subcategory-list.component.css']
})
export class SubCategoryListComponent implements OnInit {

  subcategories;
  
    constructor(private subcategoryService: SubCategoryService,
                private http: HttpClient) { }
  
    ngOnInit() {
      this.subcategories = this.getCategories();
    }
  
    getCategories() {
      this.http.get('http://localhost:3000/subcategories').subscribe(
        (response)  => this.subcategories = response
      );
    }

}
