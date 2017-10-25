import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class ProductService {

  constructor(private http: HttpClient) {
  }

  getProducts() {
    return this.http.get('http://localhost:3000/products');
  }


  addProduct(product) {
    return this.http.post('http://localhost:3000/products', product);
  }

}
