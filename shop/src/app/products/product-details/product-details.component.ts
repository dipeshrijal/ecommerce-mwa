import {Component, OnInit} from '@angular/core';
import {ProductService} from "../product.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;
  quantity = 1;
  size;
  color;

  constructor(private productService: ProductService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.productService.getProductsById(this.route.snapshot.params.id)
      .subscribe(
        product => {
          this.product = product;
        }
      );
  }

  addToCart(product) {
    let items = {
      items: {
        "product": product._id,
        "quantity": this.quantity
      }
    };

    this.productService.addToCart(items);
  }


}
