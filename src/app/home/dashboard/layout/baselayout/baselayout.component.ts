import { Component } from '@angular/core';
import { Router, Route } from '@angular/router';

@Component({
  selector: 'app-baselayout',
  templateUrl: './baselayout.component.html',
  styleUrls: ['./baselayout.component.scss']
})
export class BaselayoutComponent {

  constructor(private router: Router) { }
}
