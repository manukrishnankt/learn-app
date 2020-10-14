import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import * as wjcCore from '@grapecity/wijmo';
import * as wjcGrid from '@grapecity/wijmo.grid';

@Component({
  selector: 'app-wijmo-footer',
  templateUrl: './wijmo-footer.component.html',
  styleUrls: ['./wijmo-footer.component.scss']
})
export class WijmoFooterComponent implements OnInit {

  data: any[];
    selectedItem: string;
    
    // references FlexGrid named 'flex' in the view
    @ViewChild('flex') flex: wjcGrid.FlexGrid;

    // DataSvc will be passed by derived classes
    constructor() {
        this.data = this._getData();
    }
  ngOnInit(): void {
  }

    flexInitialized(flexgrid: wjcGrid.FlexGrid) {
        // sort the data by country
        let sd = new wjcCore.SortDescription('country', true);
        flexgrid.collectionView.sortDescriptions.push(sd);
        flexgrid.columnFooters.rows.push(new wjcGrid.GroupRow());
        flexgrid.collectionView.currentChanged.addHandler(this._updateCurrentInfo.bind(this));
        this._updateCurrentInfo();
    }

    private _getData() {
        // create some random data
        let countries = 'US,Germany,UK,Japan,Italy,Greece'.split(','),
            data = [];
        for (let i = 0; i < countries.length; i++) {
            data.push({
                id: i,
                country: countries[i],
                sales: Math.random() * 10000,
                expenses: Math.random() * 5000
            });
        }

        return data;
    }

    private _updateCurrentInfo() {
        this.selectedItem = wjcCore.format(
            'Country: <b>{country}</b>, Sales: <b>{sales:c0}</b> Expenses: <b>{expenses:c0}</b>',
            this.flex.collectionView.currentItem);
    }

}
