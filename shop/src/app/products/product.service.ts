import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class ProductService {

  constructor(private http: HttpClient) {
  }

  getProducts() {
    return this.http.get('http://localhost:3000/products');
  }

  getProductsById(id) {
    return this.http.get('http://localhost:3000/products/' + id);
  }

  getProductsBySubcategory(subcat) {
    return this.http.get('http://localhost:3000/products/category/' + subcat);
  }


  addProduct(product) {
    return this.http.post('http://localhost:3000/products', product);
  }

  addToCart(product) {
    return this.http.post('http://localhost:3000/shoppingcarts', product);
  }

}
