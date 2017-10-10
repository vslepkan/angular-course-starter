import { FilterTypePipe } from './filter-type.pipe';
import { PipeTransform } from '@angular/core';

describe('FilterTypePipe', () => {
  it('create an instance', () => {
    const pipe: PipeTransform = new FilterTypePipe();
    expect(pipe).toBeTruthy();
  });
});
