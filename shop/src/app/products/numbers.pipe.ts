import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'numbers'
})
export class NumbersPipe implements PipeTransform{
  transform(value, args:string[]) : any {
    let res = [];
    for (let i = 1; i < value; i++) {
      res.push(i);
    }
    return res;
  }

}
