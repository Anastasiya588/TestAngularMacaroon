import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'customCurrency'
})
export class CustomCurrencyPipe implements PipeTransform {

  transform(value: number, currency: string = ' руб.'): string {
    return value + currency;
  }

}
