import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custPercentagen'
})
export class CustPercentagenPipe implements PipeTransform {
  calculated : number = null;
  transform(value: number, ...args: unknown[]): string {
    let unknwn = value;
    this.calculated = (unknwn * 100)/ 400;
    return this.calculated + ' %';
  }
}
