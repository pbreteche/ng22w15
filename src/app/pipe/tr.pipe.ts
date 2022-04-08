import { Pipe, PipeTransform } from '@angular/core';
import { transliterate } from 'transliteration';

@Pipe({
  name: 'tr'
})
export class TrPipe implements PipeTransform {
  transform(value?: string): unknown {
    return value ? transliterate(value) : '';
  }
}
