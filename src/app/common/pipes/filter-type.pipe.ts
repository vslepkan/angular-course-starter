import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterType'
})
export class FilterTypePipe implements PipeTransform {

  public transform(value: Hotel[], arg: string): Hotel[] {
    if (!arg) {
      return value;
    }

    return value
      .filter(({ type }) =>
        type.toLowerCase() === arg.toLowerCase());
  }
}
