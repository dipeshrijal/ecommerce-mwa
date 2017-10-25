import { Brand } from './../models/Brand';

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class BrandService {

    constructor(private http: HttpClient) {}

    addBrand(brand:Brand) {
        return this.http.post('http://localhost:3000/brands', brand);
      }

      getBrands() {

        return this.http.get('http://localhost:3000/brands');
      }


}
