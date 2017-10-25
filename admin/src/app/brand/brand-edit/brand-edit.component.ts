import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BrandService } from './../brand.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FileUploader,FileSelectDirective} from 'ng2-file-upload/ng2-file-upload';

// const URL = '/api/';
const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
  selector: 'app-brand-edit',
  templateUrl: './brand-edit.component.html',
  styleUrls: ['./brand-edit.component.css'],
})
export class BrandEditComponent implements OnInit {

  @ViewChild("addBrand") form:NgForm;

  public uploader:FileUploader = new FileUploader({url: URL});

  constructor(private brandService:BrandService,private router: Router) { }

  ngOnInit() {
  }
  addNewBrand(){

    //this.brandService.addBrand(this.form.value);
    //this.router.navigate(['/brands']);

    this.brandService.addBrand(this.form.value).subscribe(
      data => this.router.navigate(['/brands'])
    )

}

}
