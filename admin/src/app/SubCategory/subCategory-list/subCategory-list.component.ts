import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subcategory-list',
  templateUrl: './subcategory-list.component.html',
  styleUrls: ['./subcategory-list.component.css']
})
export class SubCategoryListComponent implements OnInit {

  numbers: number[] = [1,2,3,4];

  constructor() { }

  ngOnInit() {
  }

}
