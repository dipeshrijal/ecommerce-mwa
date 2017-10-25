import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class BrandService {

  constructor(private http: HttpClient) {
  }

  getBrands() {

    return this.http.get('http://localhost:3000/brands');
  }


}
