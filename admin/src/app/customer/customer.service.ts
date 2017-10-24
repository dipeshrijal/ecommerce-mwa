import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CustomerService {

    constructor(private http: HttpClient) {}


    addCategory(category) {
        this.http.post('http://localhost:3000/categories', category).subscribe(
            (response)  => console.log(response)
        );
    }

}
