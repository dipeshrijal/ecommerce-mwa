/*
import { Directive, ElementRef, OnInit, ChangeDetectionStrategy,Input } from '@angular/core';
import { NG_VALIDATORS,Validator,AbstractControl,ValidatorFn  } from '@angular/forms';

@Directive({
    selector: '[priceCheck]',
    providers: [{provide: NG_VALIDATORS, useExisting: PriceCheckDirective, multi: true}]
  })
  export class PriceCheckDirective implements Validator {
    @Input() priceCheck: number;
    forbiddenName: string;

    
   
    validate(control: AbstractControl): {[key: string]: any} {
        console.log(this.priceCheck);
        const forbidden = this.priceCheck; 
        return forbidden ? {'forbiddenName': {value: control.value}} : null;
    
  }

}
*/

import { Directive, forwardRef, Attribute } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
@Directive({
    selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => PriceCheckDirective), multi: true }
    ]
})
export class PriceCheckDirective implements Validator {

    constructor( @Attribute('validateEqual') public validateEqual: string) {}

    validate(c: AbstractControl): { [key: string]: any } {
        // self value (e.g. discount price)
        let v = c.value;

        // control value (e.g. price)
        let e = c.root.get(this.validateEqual);
        console.log("v"+v);
        console.log("e"+e);

        // value not equal
        if (e && v !== e.value) return {
            validateEqual: false
        }
        return null;
    }
}
