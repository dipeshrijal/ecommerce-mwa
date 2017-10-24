import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import "rxjs/add/observable/of";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/mergeMap";


@Injectable()
export class ProductService {
    
    getProducts() {
      //return PRODUCTS;
    }

    addNewProduct(p){
      //PRODUCTS.push(p);
      // console.log(PRODUCTS);
    }
      
}