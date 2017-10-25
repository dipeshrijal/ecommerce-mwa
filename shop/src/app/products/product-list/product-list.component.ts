import {Component, OnInit} from '@angular/core';
import {ProductService} from "../product.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products;

  constructor(private productService: ProductService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {

    this.route.params.subscribe(
      (params: Params) => {
        this.productService.getProductsBySubcategory(params['subcat']).subscribe(
          products => {
            console.log(products);
            this.products = products;
          }
        );
      }
    );


  }

}
