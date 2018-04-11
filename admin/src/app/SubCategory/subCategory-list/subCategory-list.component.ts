import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {SubCategoryService} from '../sub-category.service';
import {Subcategory} from '../../models/SubCategory';
import 'rxjs/add/operator/publishLast';
import 'rxjs/add/operator/share';

@Component({
  selector: 'app-subcategory-list',
  templateUrl: './subcategory-list.component.html',
  styleUrls: ['./subcategory-list.component.css']
})
export class SubCategoryListComponent implements OnInit {

  subcategories: Subcategory[];
  subcategory;

  constructor(private subcategoryService: SubCategoryService,
              private router: Router) {
  }

  ngOnInit() {
    this.subcategoryService.getSubCategories().subscribe(
      (response: Subcategory[]) => {
        this.subcategories = response;
      }
    );
    //this.getSubcategories();
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
    // this.subcategoryService.getSubCategories().subscribe(
    //   (response: Subcategory[]) => {
    //     this.subcategories = response;
    //   }
    // );
  }

}
