import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, Inject, ComponentFactory } from '@angular/core';
import { Child1Component } from './child1/child1.component';

@Component({
  selector: 'app-dynamic-component',
  templateUrl: './dynamic-component.component.html',
  styleUrls: ['./dynamic-component.component.scss']
})
export class DynamicComponentComponent implements OnInit {

  @ViewChild('dynCompContainer', { read: ViewContainerRef }) compContainer: ViewContainerRef;
  private componentFactoryResolver: ComponentFactoryResolver;
  constructor(
    @Inject(ComponentFactoryResolver) componentFactoryResolver: ComponentFactoryResolver,
  ) {
    this.componentFactoryResolver = componentFactoryResolver;
   }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
    
    this.createComponent();
  }
  createComponent(){
    const factory: ComponentFactory<any> = this.componentFactoryResolver.resolveComponentFactory(Child1Component);
      const componentRef = this.compContainer.createComponent(factory, 0).instance;
      componentRef.someData = '1234';
      componentRef.mergeData.subscribe(res=>{
          console.log(res);
      });
  }
  mergeData(){
    console.log('ASD');
  }
}
