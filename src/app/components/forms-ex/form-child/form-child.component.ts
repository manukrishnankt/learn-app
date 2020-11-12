import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form-child',
  templateUrl: './form-child.component.html',
  styleUrls: ['./form-child.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class FormChildComponent implements OnInit, AfterViewInit {
  @Input('cityList') cityList : any;
  @Input('dummyData') dummyData : any;
  @Input('form') form : any;
  @Output() onSubmitEmit: EventEmitter<any> = new EventEmitter();
  constructor(private cdr: ChangeDetectorRef){}

  ngOnInit(): void {
  }
  onSubmit(){
    this.onSubmitEmit.emit();
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.cdr.detectChanges();
      console.log(this.dummyData);
    }, 1000);
  }
}
