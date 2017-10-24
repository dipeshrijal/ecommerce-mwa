import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  numbers: number[] = [1,2,3,4,5,6,7,8,9,0,12,2,2,2,222,22];

  constructor() { }

  ngOnInit() {
  }

}
