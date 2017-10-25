import {Pipe,PipeTransform} from '@angular/core';

@Pipe({
    name:'totalPrice',pure:false
})
export class TotalPricePipe implements PipeTransform{
    transform(value){

            return (value.price * value.quantity);
            
    }
}