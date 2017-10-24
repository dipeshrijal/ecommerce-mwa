import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  //constructor(public prodService: ProdService) {    
 // }

addNewCustomer(addCustomer:NgForm){
    console.log(addCustomer.value);

}

  ngOnInit() {
  }

}
