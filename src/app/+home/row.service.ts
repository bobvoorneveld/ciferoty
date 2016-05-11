import { Injectable } from '@angular/core';

export interface Row {
  points: number;
  grade: number;
  color?: string;
}

@Injectable()
export class RowService {

  constructor() {}

  generateRows(totalPoints: number, percentage: number) {
    var rows: Array<Row> = [];
    var pointsForA6 = totalPoints * percentage;
    var pointsPerNumber = 4 / (totalPoints - pointsForA6);
    for (var points = totalPoints; points >= 0; points--) {
      var grade = Math.max(10 - (totalPoints - points) * pointsPerNumber, 1);
      rows.push({points: points, grade: grade, color: 'red'});
      if (grade == 1) {
        break;
      }
    }
    return rows;
  }
}
