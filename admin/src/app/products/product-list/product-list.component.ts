import { Product } from './../../models/Product';
import {Component, OnInit} from '@angular/core';
import {ProductService} from '../product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:Product[];

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe(
      (response:Product[]) => {
        this.products = response;
        console.log(response);
      }
    );
  }

}
