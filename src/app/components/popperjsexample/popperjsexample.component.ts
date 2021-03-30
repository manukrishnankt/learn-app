import { AfterViewInit, Component, OnInit } from '@angular/core';
// import { createPopper } from '@popperjs/core';
declare var $: any;

@Component({
  selector: 'app-popperjsexample',
  templateUrl: './popperjsexample.component.html',
  styleUrls: ['./popperjsexample.component.scss']
})
export class PopperjsexampleComponent implements OnInit, AfterViewInit {

  constructor() { }
  ngAfterViewInit(): void {
    $(() => {
     const i = $('[data-toggle="tooltip"]');
     i.tooltip();
     debugger;
    });
  //  this.button = document.querySelector('#button');
  //  this.tooltip = document.querySelector('#tooltip');
  //   this.showEvents.forEach(event => {
  //     this.button.addEventListener(event, this.show);
  //   });

  //   this.hideEvents.forEach(event => {
  //     this.button.addEventListener(event, this.hide);
  //   });
  }

  ngOnInit(): void {
    
  }

  // create() {
  //   this.popperInstance = createPopper(this.button, this.tooltip, {
  //     modifiers: [
  //       {
  //         name: 'offset',
  //         options: {
  //           offset: [0, 8],
  //         },
  //       },
  //     ],
  //   });
  // }

  // destroy() {
  //   if (this.popperInstance) {
  //     this.popperInstance.destroy();
  //     this.popperInstance = null;
  //   }
  // }

  // show = () => {
  //   this.tooltip.setAttribute('data-show', '');
  //   this.create();
  // }

  // hide = () => {
  //   this.tooltip.removeAttribute('data-show');
  //   this.destroy();
  // }

}
