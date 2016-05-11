import { Component } from '@angular/core';

import { ScoringTableComponent } from './scoring-table';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives: [ScoringTableComponent]
})
export class HomeComponent {
  totalPoints = 30;
  percentage = 60;

}
