import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mat-icon-reg',
  templateUrl: './mat-icon-reg.component.html',
  styleUrls: ['./mat-icon-reg.component.scss']
})
export class MatIconRegComponent implements OnInit, AfterViewInit {

  constructor() { }

  matIconName = 'a';
  natIconArray = ['a', 'b', 'c'];
  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
      }
}
