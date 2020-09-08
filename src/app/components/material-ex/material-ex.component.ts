import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material-ex',
  templateUrl: './material-ex.component.html',
  styleUrls: ['./material-ex.component.scss']
})
export class MaterialExComponent implements OnInit {

  panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
  }

}
