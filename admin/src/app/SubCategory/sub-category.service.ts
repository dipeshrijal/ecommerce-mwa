import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class SubCategoryService {
  constructor(private http: HttpClient) {
  }


  addSubCategory(subcategory) {
    return this.http.post('http://localhost:3000/categories/subcategories/' + subcategory.category,
      subcategory);
  }

  getSubCategories() {
    return this.http.get('http://localhost:3000/subcategories/category').share();
  }

  deleteSubCat(id) {
    return this.http.delete('http://localhost:3000/subcategories/' + id);
  }

  getCategoryById(id) {
    return this.http.get('http://localhost:3000/subcategories/' + id);
  }

}
