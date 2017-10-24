import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CategoryService {

    constructor(private http: HttpClient) {}


    // addCategory(category) {
    //     this.http.get('http://localhost:3000/categories').subscribe(
    //         (response)  => console.log(response)
    //     );
    // }

}