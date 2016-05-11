import { Component } from '@angular/core';
import { NavigationComponent } from './navigation/navigation.component';
import { Routes , ROUTER_DIRECTIVES } from '@angular/router';
import { HomeComponent } from './+home';
import { AboutComponent } from './+about';

@Component({
  moduleId: module.id,
  selector: 'ciferoty-app',
  templateUrl: 'ciferoty.component.html',
  styleUrls: ['ciferoty.component.css'],
  directives: [ROUTER_DIRECTIVES, NavigationComponent],
})
@Routes([
  {path: '/about', component: AboutComponent},
  {path: '', component: HomeComponent},
])
export class CiferotyAppComponent {
  constructor() {}
}
