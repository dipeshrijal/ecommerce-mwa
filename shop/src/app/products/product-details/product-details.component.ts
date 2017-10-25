import {Component, OnInit, ViewChild} from '@angular/core';
import {ProductService} from "../product.service";
import {ActivatedRoute} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;

  constructor(private productService: ProductService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.productService.getProductsById(this.route.snapshot.params.id)
      .subscribe(
        product => {
          this.product = product;
          console.log("hello");
        }
      );
  }

  addToCart() {

  }


}
