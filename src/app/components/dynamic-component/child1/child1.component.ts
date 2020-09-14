import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component implements OnInit {
  @Input('someData') someData: string;
  @Output('mergeData') mergeData = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    console.log('Child Loaded');
    console.log(this.someData);
    this.mergeData.emit({value:"Child Data !!!!"});
  }

}
