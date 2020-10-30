import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-forms-ex',
  templateUrl: './forms-ex.component.html',
  styleUrls: ['./forms-ex.component.scss']
})
export class FormsExComponent implements OnInit {
  cityList : any[] =["Alaska", "Oman", "Delhi", "Kothamangalam" ];
  conditionList : any[] =["EQUALS", "NOT EQUALS", "GREATER THAN", "LESS THAN" ];

  form = new FormGroup({
    city: new FormControl(''),
    condition: new FormControl(''),
    city2: new FormControl(''),
    city3: new FormControl('')
  });

  form1 = new FormGroup({
    city1: new FormControl(''),
  });
  seconformVisibleYN: boolean = false;
  ngOnInit(): void {
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
}
