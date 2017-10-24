import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { FileUploader,FileSelectDirective} from 'ng2-file-upload/ng2-file-upload';

// const URL = '/api/';
const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  public uploader:FileUploader = new FileUploader({url: URL});

  //constructor(public prodService: ProdService) {    
 // }

addNewProduct(addProductForm:NgForm){
    console.log(addProductForm);
    console.log(addProductForm.value);
  //this.prodService.addNewProduct(addProductForm.value);
}

  ngOnInit() {
  }

}
