import { Subcategory } from './../../models/SubCategory';
import { Brand } from './../../models/Brand';
import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {SubCategoryService} from '../../SubCategory/sub-category.service';
import {BrandService} from '../../brand/brand.service';
import {Router} from '@angular/router';
import {ProductService} from '../product.service';

// const URL = '/api/';
// const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  @ViewChild('addProduct') form: NgForm;

  // public uploader:FileUploader = new FileUploader({url: URL});

  brands:Brand[];
  subcategories:Subcategory[];

  constructor(private productService: ProductService, private brandService: BrandService,
              private subCategoryService: SubCategoryService,
              private router: Router) {
  }

  ngOnInit() {
    this.brandService.getBrands().subscribe(
      (brands:Brand[]) => this.brands = brands
    );

    this.subCategoryService.getSubCategories().subscribe(
      (subcategories:Subcategory[]) => this.subcategories = subcategories
    );
  }


  addNewProduct() {
    // console.log(this.form.value);
    this.productService.addProduct(this.form.value).subscribe(
      data => this.router.navigate(['/products'])
    );


  }

}
