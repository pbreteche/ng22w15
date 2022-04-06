import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { minDate } from './validators/min-date';

@Directive({
  selector: '[appMinDate]',
  providers: [{provide: NG_VALIDATORS, useExisting: MinDateDirective, multi: true}]
})
export class MinDateDirective implements Validator {
  @Input('appMinDate') minDate = new Date();

  validate(control: AbstractControl): ValidationErrors | null {    
    return minDate(this.minDate)(control);
  }
}
