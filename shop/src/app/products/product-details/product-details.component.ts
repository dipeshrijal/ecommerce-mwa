import {Component, OnInit} from '@angular/core';
import {ProductService} from "../product.service";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../user/user.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;
  user;
  quantity = 1;
  size;
  color;

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private userService: UserService) {
  }

  ngOnInit() {
    this.productService.getProductsById(this.route.snapshot.params.id)
      .subscribe(
        product => {
          this.product = product;
        }
      );

    this.userService.user.subscribe(
      user => this.user = user
    );
  }

  addToCart(product) {
    console.log(this.user);
    let items = {
      "product": product._id,
      "quantity": this.quantity,
      "user": this.user._id
    };

    this.productService.addToCart(items).subscribe(
      
    );
  }


}
