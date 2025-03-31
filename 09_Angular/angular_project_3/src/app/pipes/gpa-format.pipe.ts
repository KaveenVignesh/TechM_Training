import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gpaFormatter',
})
export class GpaFormatterPipe implements PipeTransform {
  transform(value: number | null): string {
    if (value === null || isNaN(value)) {
      return 'N/A'; // Handle invalid GPA values
    }
    return value.toFixed(2); // Format to two decimal places
  }
}
