import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class BrandService {
    brands;

    constructor(private http: HttpClient) {}

    addBrand(brand) {
        return this.http.post('http://localhost:3000/brands', brand);
      }

      getBrands() {
        
        this.http.get('http://localhost:3000/brands').subscribe(
          (response)  => this.brands = response
        );
        return this.brands;
        
        //return  this.http.get('http://localhost:3000/brands', this.brands);
      }
    

}
