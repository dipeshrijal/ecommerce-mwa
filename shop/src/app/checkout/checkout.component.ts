import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  shoppingcarts;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get("http://localhost:3000/shoppingcarts/user/59f143f726f96d1466106a1e")
      .subscribe(
        data => {
          this.shoppingcarts = data;
        }
      );
  }

}
