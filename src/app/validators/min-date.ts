import { AbstractControl, ValidationErrors } from "@angular/forms";

export function minDate(control: AbstractControl): ValidationErrors | null {
    if (!control.value) {
        return null;
    }
    let now = new Date;
    let dateValue = new Date(control.value);

    console.log(now < dateValue);    

    return now < dateValue ? null : { minDate: {value: control.value, now: now.toString()}}
}
