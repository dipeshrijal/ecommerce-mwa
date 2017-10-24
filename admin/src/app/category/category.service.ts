import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CategoryService {

  constructor(private http: HttpClient) {
  }


  addCategory(category) {
    return this.http.post('http://localhost:3000/categories', category);
  }

}
