import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'cutText'
})
export class CutTextPipe implements PipeTransform {

  transform(value: string): string {
    const limit: number = 95;
    let shortValue: string = '';
    shortValue = value.replace(new RegExp("(^.{" + (limit - 1) + "}([^ ]+|\\s))(.*)"), '$1'+' ...')
    return shortValue;
  }

}
