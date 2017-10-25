import { BrandService } from './../../brand/brand.service';
import {Router} from '@angular/router';
import {ProductService} from './../product.service';
import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {FileUploader} from 'ng2-file-upload/ng2-file-upload';

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

  constructor(private productService: ProductService,
              private router: Router) {
  }

  ngOnInit() {
    //this.brands.BrandService.get
  }


  addNewProduct() {
    this.productService.addProduct(this.form.value).subscribe(
      data => this.router.navigate(['/products'])
    );


  }

}
