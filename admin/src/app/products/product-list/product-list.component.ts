import {HttpClient} from '@angular/common/http';
import {ProductService} from './../product.service';

import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products;

  constructor(private productService: ProductService,
              private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('http://localhost:3000/products').subscribe(
      (response) => this.products = response
    );
  }

  getProducts() {
    return this.http.get('http://localhost:3000/products').subscribe(
      (response) => this.products = response
    );
  }

}
