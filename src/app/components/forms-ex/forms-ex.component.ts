import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forms-ex',
  templateUrl: './forms-ex.component.html',
  styleUrls: ['./forms-ex.component.scss'],
})
export class FormsExComponent implements OnInit, AfterViewInit {
  public dummyData: Array<string> = [];
  cityList : any[] =["Alaska", "Oman", "Delhi", "Kothamangalam" ];
  conditionList : any[] =["EQUALS", "NOT EQUALS", "GREATER THAN", "LESS THAN" ];
  constructor(){
    
  }
  form = new FormGroup({
    city: new FormControl(''),
    condition: new FormControl(''),
    city2: new FormControl(''),
    city3: new FormControl(''),
    city4: new FormControl('')
  });

  form1 = new FormGroup({
    city1: new FormControl(''),
  });
  seconformVisibleYN: boolean = false;
  ngOnInit(): void {
    this.form.patchValue({
      city:'Oman'
    });
  }

  onSubmit(){
    console.log(this.form.value);
  }
  onSubmit1(){
    console.log(this.form.value);
  }
  visiblity(){
    this.seconformVisibleYN = !this.seconformVisibleYN;
  }
  ngAfterViewInit(): void {
    this.dummyData = [...this.dummyData,'aswin'] ;
  }
}
