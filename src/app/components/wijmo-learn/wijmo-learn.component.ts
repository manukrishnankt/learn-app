import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

import { WjFlexGridFilter } from '@grapecity/wijmo.angular2.grid.filter';
import { CollectionView, IEventHandler } from '@grapecity/wijmo';

@Component({
  selector: 'app-wijmo-learn',
  templateUrl: './wijmo-learn.component.html',
  styleUrls: ['./wijmo-learn.component.scss']
})
export class WijmoLearnComponent implements OnInit {

  collectionView: CollectionView;
  filterDefinition: string;

  @ViewChild('flexGridFilter') flexGridFilter: WjFlexGridFilter;

  ngOnInit() {
    this.collectionView = new CollectionView(this.getData());
  }

  ngAfterViewInit() {
  }

  private getData() {
    const countries = "US,Japan,UK,China,India,Italy,Greece".split(",");

    return countries.map((country: string, index: number) => ({
      id: index + 1,
      country: country,
      sales: Math.random() * 1000,
      downloads: Math.random() * 500
    }));
  }s

}
