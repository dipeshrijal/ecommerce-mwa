import {Component, OnInit, ViewChild} from '@angular/core';
import {CategoryService} from "../category.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {

  @ViewChild('addCategory') form: NgForm;

  constructor(private categoryService: CategoryService,
              private router: Router) {
  }

  ngOnInit() {
  }


  addNewCategory() {
    this.categoryService.addCategory(this.form.value).subscribe(
      response => {
        this.router.navigateByUrl('/categories');
      }
    );
  }

}
