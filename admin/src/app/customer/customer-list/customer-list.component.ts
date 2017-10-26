import { Customer } from './../../models/Customer';
import { HttpClient } from '@angular/common/http';
import { CustomerService } from './../customer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers:Customer[];

    constructor(private customerService: CustomerService,
                private http: HttpClient) { }

    ngOnInit() {
      this.getCustomers();
    }

    getCustomers() {
      this.http.get('http://localhost:3000/users').subscribe(
        (response:Customer[])  => {
          this.customers = response;
        }
      );
    }

}
