import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  numbers: number[] = [1,2,3,4];

  constructor() { }

  ngOnInit() {
  }

}
