import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { FileUploader,FileSelectDirective} from 'ng2-file-upload/ng2-file-upload';

// const URL = '/api/';
const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
  selector: 'app-brand-edit',
  templateUrl: './brand-edit.component.html',
  styleUrls: ['./brand-edit.component.css'],
})
export class BrandEditComponent implements OnInit {
  public uploader:FileUploader = new FileUploader({url: URL});

  constructor() { }

  ngOnInit() {
  }
  addNewBrand(addBrand:NgForm){
    //console.log(addBrand.value);

}

}
