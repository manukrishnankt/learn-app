import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multi-tabed',
  templateUrl: './multi-tabed.component.html',
  styleUrls: ['./multi-tabed.component.scss']
})
export class MultiTabedComponent implements OnInit {
  public tab2ActiveYN = true;
  public tab3ActiveYN = true;
  constructor() { }

  ngOnInit(): void {
  }
  onTabEvent(): any {
    this.tab2ActiveYN = false;
  }
}
