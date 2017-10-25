import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class SubCategoryService {

    constructor(private http: HttpClient) {}


    addSubCategory(subcategory) {
        this.http.post(`http://localhost:3000/categories/subcategories/` + subcategory.category, subcategory).subscribe(
            (response)  => console.log(response)
        );
    }

}
