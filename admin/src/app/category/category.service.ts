import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CategoryService {
    categories;

  constructor(private http: HttpClient) {
      
  }


  addCategory(category) {
    return this.http.post('http://localhost:3000/categories', category);
  }

  getCategories() {
    
    this.http.get('http://localhost:3000/categories').subscribe(
      (response)  => this.categories = response
    );
    return this.categories;
    
    
  }

}
