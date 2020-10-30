import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form-child',
  templateUrl: './form-child.component.html',
  styleUrls: ['./form-child.component.scss']
})
export class FormChildComponent implements OnInit {
  @Input('cityList') cityList : any;
  @Input('form') form : any;
  @Output() onSubmitEmit: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.onSubmitEmit.emit();
  }
}
