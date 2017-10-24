import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import "rxjs/add/observable/of";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/mergeMap";


@Injectable()
export class ProductService {
    
  constructor(private http: HttpClient) {}
  
  
      addProduct(product) {
          this.http.post('http://localhost:3000/products', product).subscribe(
              (response)  => console.log(response)
          );
      }
      
}