import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addOne',
  standalone: true
})
export class AddOnePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): number {
    return value + 1;
  }

}
