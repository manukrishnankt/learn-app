import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flex-layout',
  templateUrl: './flex-layout.component.html',
  styleUrls: ['./flex-layout.component.scss']
})
export class FlexLayoutComponent implements OnInit {

  constructor() { }
  variableMe = 'MKSD';
  ngOnInit(): void {
    this.variableMe = this.variableMe.substring(1, this.variableMe.length - 1);
  }

}
