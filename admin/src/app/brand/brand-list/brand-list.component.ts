import { HttpClient } from '@angular/common/http';
import { BrandService } from './../brand.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css']
})
export class BrandListComponent implements OnInit {

  brands;
  
    constructor(private brandService:BrandService,
                private http: HttpClient) { }
  
    ngOnInit() {
      //this.brands = this.getBrands();
      this.brands = this.getBrands();


    }
  
    getBrands() {
      this.brandService.getBrands().subscribe(
        (response)  => this.brands = response
      );
    }

}
