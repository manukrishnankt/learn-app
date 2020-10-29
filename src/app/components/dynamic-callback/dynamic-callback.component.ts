import { Renderer2 } from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';
import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-callback',
  templateUrl: './dynamic-callback.component.html',
  styleUrls: ['./dynamic-callback.component.scss']
})
export class DynamicCallbackComponent implements OnInit, AfterViewInit {
  intArr: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  @ViewChild('dynamic') dynamic: ElementRef;
  constructor(private renderer: Renderer2) { }
  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.intArr.forEach(ite =>{
      const d2 = this.renderer.createElement('div');
      const text = this.renderer.createText(ite+'');
      this.renderer.addClass(d2, 'dynamic');
      this.renderer.listen(
        d2, 
        'click',
        (evt) => {
           this.clickMe(ite);
        }
      );
      this.renderer.appendChild(d2, text);
      this.renderer.appendChild(this.dynamic.nativeElement, d2);
    });
  }
  clickMe(ite){
    console.log(ite);
  }
}
