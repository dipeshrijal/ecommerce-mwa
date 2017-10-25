import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class BrandService {

    constructor(private http: HttpClient) {}

    addBrand(brand) {
        return this.http.post('http://localhost:3000/brands', brand);
      }

      getBrands() {
        
        return this.http.get('http://localhost:3000/brands');
        
        //return  this.http.get('http://localhost:3000/brands', this.brands);
      }
    

}
