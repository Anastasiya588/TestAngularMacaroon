import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneNumber'
})
export class PhoneNumberPipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(/^(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})$/g, '+$1 ($2) $3-$4-$5');
  }

}