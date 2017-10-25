import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class SubCategoryService {

  constructor(private http: HttpClient) {
  }


  addSubCategory(subcategory) {
    return this.http.post('http://localhost:3000/categories/subcategories/' + subcategory.category,
      subcategory);
  }

  getSubCategories() {
    return this.http.get('http://localhost:3000/subcategories/category');
  }

}
