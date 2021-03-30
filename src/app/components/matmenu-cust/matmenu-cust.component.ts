import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-matmenu-cust',
  templateUrl: './matmenu-cust.component.html',
  styleUrls: ['./matmenu-cust.component.scss']
})
export class MatmenuCustComponent implements OnInit, AfterViewInit {

  constructor() { }
  @ViewChild('menuTrigger') menuTrigger: MatMenuTrigger;
  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
  }
  clickMe() {
    this.menuTrigger.openMenu();
  }
}
