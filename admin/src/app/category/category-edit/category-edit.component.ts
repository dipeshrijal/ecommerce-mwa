import {HttpClient} from '@angular/common/http';
import {CategoryService} from './../category.service';
import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {

  @ViewChild('addCategory') form: NgForm;

  constructor(private categoryService: CategoryService,
              private router: Router) {
  }

  ngOnInit() {
  }


  addNewCategory() {
    this.categoryService.addCategory(this.form.value);

    this.router.navigate(['/category']);
  }

}
