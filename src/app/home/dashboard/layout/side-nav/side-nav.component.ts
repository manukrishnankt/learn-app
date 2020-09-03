import { Component, OnInit } from '@angular/core';
import { childRoutes } from 'src/app/home/util/shared/child-routes';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  routes = childRoutes;
  constructor() { }

  ngOnInit(): void {
  }

}
