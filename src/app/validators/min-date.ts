import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function minDate(floor: Date|string): ValidatorFn {
    if (typeof floor === 'string') {
        floor = new Date(floor);
    }

    return function (control: AbstractControl): ValidationErrors | null {
        if (!control.value) {
            return null;
        }
        let dateValue = new Date(control.value);
    
        return floor < dateValue ? null : { minDate: {value: control.value, floor: floor.toString()}}
    }
}
