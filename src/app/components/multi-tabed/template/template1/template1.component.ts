import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-template1',
  templateUrl: './template1.component.html',
  styleUrls: ['./template1.component.scss']
})
export class Template1Component implements OnInit {

  constructor() { }
  @Output() public tabEmitEvent: EventEmitter<any> = new EventEmitter();
  ngOnInit(): void {
  }

  template2Active(): any {
    this.tabEmitEvent.emit();
  }
}
