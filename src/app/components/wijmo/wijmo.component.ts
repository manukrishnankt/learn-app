import { Component, OnInit, ViewChild } from '@angular/core';
import * as wjcGrid from '@grapecity/wijmo.grid';
import * as wjcCore from '@grapecity/wijmo';

@Component({
  selector: 'app-wijmo',
  templateUrl: './wijmo.component.html',
  styleUrls: ['./wijmo.component.scss']
})
export class WijmoComponent implements OnInit {
  data: any;
  @ViewChild('flexGridId') flexGridId: wjcGrid.FlexGrid;
  constructor() {
    this.data = this.getData();
  }
  toolTip = new wjcCore.Tooltip();
  ngOnInit(): void {
  }
  getData(): any[] {
    const countries = [
        'United States of America',
        'Germany (Deutsches Bundesrepublik)',
        'United Kingdom',
        'Japan (Nippon)',
        'Italy (Il Bel Paese)',
        'Greece'
    ];
    const data = [];
    for (let i = 0; i < 10; i++) {
        data.push({
            from: this.getOne(countries),
            to: this.getOne(countries),
            act: i % 5 !== 0,
            downloads: Math.round(Math.random() * 200000),
            sales: Math.random() * 100000,
            expenses: Math.random() * 50000
        });
    }
    return data;
  }
  getOne(arr: any[]): any {
      return arr[Math.floor(Math.random() * arr.length)];
  }
  mouseOutFunction(obj: any) {
    this.toolTip.hide();
  }
  mouseOverFunction(obj: any) {
    const ht = this.flexGridId.hitTest(obj);
    let rng = null;

    if (!ht.range.equals(rng)) {
        if (ht.cellType === wjcGrid.CellType.Cell) {
            rng = ht.range;
            const data = this.flexGridId.getCellData(rng.row, rng.col, true);
            const  tipContent = data;
            const  cellElement = document.elementFromPoint(obj.clientX, obj.clientY);
            const cellBounds = wjcCore.Rect.fromBoundingRect(cellElement.getBoundingClientRect());
            this.toolTip.show(this.flexGridId.hostElement, tipContent, cellBounds);
        }
    }
  }
}
