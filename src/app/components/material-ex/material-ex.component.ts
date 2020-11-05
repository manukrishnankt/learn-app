import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-material-ex',
  templateUrl: './material-ex.component.html',
  styleUrls: ['./material-ex.component.scss']
})
export class MaterialExComponent implements OnInit {
  public menuLeft = 0;
  public menuTop = 0;
  panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
  }
  openContextMenu(
    event: MouseEvent,
    trigger: MatMenuTrigger,
    triggerElement: HTMLElement
  ) {
    triggerElement.style.left = event.clientX + -25 + "px";
    triggerElement.style.top = event.clientY + 5 + "px";
    if (trigger.menuOpen) {
      trigger.closeMenu();
      trigger.openMenu();
    } else {
      trigger.openMenu();
    }
    event.preventDefault();
  }
}
