import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gradeColor',
})
export class GradeColorPipe implements PipeTransform {
  transform(grade: string): string {
    switch (grade) {
      case 'A':
        return 'green'; // Green for A
      case 'B':
        return 'blue'; // Blue for B
      case 'C':
        return 'orange'; // Orange for C
      case 'D':
        return 'red'; // Red for D
      case 'F':
        return 'darkred'; // Dark red for F
      default:
        return 'black'; // Default color
    }
  }
}
