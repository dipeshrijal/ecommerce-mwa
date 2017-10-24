import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  numbers: number[] = [1,2,3,4,5,6];

  constructor() { }

  ngOnInit() {
  }

}
