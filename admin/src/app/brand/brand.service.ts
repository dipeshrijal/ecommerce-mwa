import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class BrandService {

    constructor(private http: HttpClient) {}


    addBrand(brand) {
        this.http.post('http://localhost:3000/brands', brand).subscribe(
            (response)  => console.log(response)
        );
    }

}
