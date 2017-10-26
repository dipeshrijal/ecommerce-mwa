import {CategoryService} from '../category.service';
import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Category} from "../../models/Category";

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {

  @ViewChild('addCategory') form: NgForm;
  category: Category = {
    _id: +'',
    name: '',
    description: ''
  };

  constructor(private categoryService: CategoryService,
              private router: Router,
              private route: ActivatedRoute,
              private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('http://localhost:3000/categories/' + this.route.snapshot.params['id']).subscribe(
      (result: Category) => {
        this.category._id = result._id;
        this.category.name = result.name;
        this.category.description = result.description;
      }
    );
  }

  onUpdate() {
    this.http.put('http://localhost:3000/categories/' + this.category._id, this.category).subscribe(
      result => {
        this.router.navigate(['/categories']);
      }
    );
  }

}
