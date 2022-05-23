import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(price:number, quantity: number = 0): unknown {
    return `$ ${(price * quantity)}.00`;
  }

}
