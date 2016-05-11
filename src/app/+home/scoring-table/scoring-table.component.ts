import { Component, OnInit, Input } from '@angular/core';
import { Row, RowService } from '../row.service';

@Component({
  moduleId: module.id,
  selector: 'app-scoring-table',
  templateUrl: 'scoring-table.component.html',
  styleUrls: ['scoring-table.component.css'],
  providers: [RowService],

})
export class ScoringTableComponent implements OnInit {

  @Input() totalPoints: number;
  @Input() percentage: number;

  rows: Array<Row>;
  constructor(private rowService: RowService) {}

  ngOnInit() {
    console.log(this.totalPoints);
    this.loadRows();
  }

  ngOnChanges(changeRecord) {
    this.loadRows();
  }

  loadRows() {
    this.rows = this.rowService.generateRows(this.totalPoints, this.percentage / 100);
  }

  colorForGrade(grade:number):string {
    var color = 'rgba(' + Math.round(255 * ((10 - grade) / 10)) +',' + Math.round(255 * (grade / 10)) + ',0,.1)';
    return color;
  }


}
