import { Pipe, PipeTransform } from '@angular/core';
import { Hotel } from '../models/Hotel';

@Pipe({
  name: 'filterType'
})
export class FilterTypePipe implements PipeTransform {

  public transform(value: Hotel[], arg: string): Hotel[] {
    if (arg) {
      return value
        .filter(({ type }) =>
          type.toLowerCase() === arg.toLowerCase());
    }

    return value;
  }
}
