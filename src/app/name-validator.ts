import { AbstractControl, ValidatorFn } from '@angular/forms';

export function NameValidator(nameArr: string[]): ValidatorFn {
	return (control: AbstractControl): { [key: string]: boolean } => {
		return nameArr.indexOf(control.value) > -1 ? { 'nameIsInvalid': true } : null;
	};
}
