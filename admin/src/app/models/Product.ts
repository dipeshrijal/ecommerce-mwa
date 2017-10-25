import { Subcategory } from './SubCategory';
import { Brand } from './Brand';

export class Product{
    name:string;
    description:string;
    color:string;
    quantity:number;
    brand:Brand;
    subcategory : Subcategory
    size:number;
    price:number;
    discountedPrice:number;
    image:string[];
}