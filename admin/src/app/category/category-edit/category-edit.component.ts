import { HttpClient } from '@angular/common/http';
import { CategoryService } from './../category.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {

  @ViewChild('addCategory') form:NgForm;

  constructor(private categoryService: CategoryService,
  private http: HttpClient) { }

  ngOnInit() {

  }



  addNewCategory(){
    // this.categoryService.addCategory(this.form);
    this.http.get('http://localhost:3000/categories').subscribe(
      (response)  => console.log(response)
  );

}

}
