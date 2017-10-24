import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-subcategory-edit',
  templateUrl: './subcategory-edit.component.html',
  styleUrls: ['./subcategory-edit.component.css']
})
export class SubCategoryEditComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  addNewSubCategory(addSubCategory:NgForm){
    //console.log(addCategory.value);

}

}
