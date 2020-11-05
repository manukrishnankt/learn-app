import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import * as wjcCore from '@grapecity/wijmo';
import * as wjcGrid from '@grapecity/wijmo.grid';
import { DataService } from './data.service';
import * as wjChart from '@grapecity/wijmo.chart';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-wijmo-footer',
  templateUrl: './wijmo-footer.component.html',
  styleUrls: ['./wijmo-footer.component.scss']
})
export class WijmoFooterComponent implements OnInit {

    data: any[];
    filterColumns: Array<{itemName: string, itemList: Array<any>}>;
    columnNames: any[] = [{Key:'Country', Val: 'country'}, {Key:'Sales', Val: 'sales'}, {Key:'Expenses', Val: 'expenses'}];
    selectedItem: string;
    
    // references FlexGrid named 'flex' in the view
    @ViewChild('flex') flex: wjcGrid.FlexGrid;
    @ViewChild('flexC') flexC: wjChart.FlexChart;
    datass: any[];
    palette: any;

    // DataSvc will be passed by derived classes
    constructor(private dataService: DataService) {
        this.data = this._getData();
        this.datass = dataService.getData();
        this.palette = this.getRandomPalette();
    }
  ngOnInit(): void {
      this.filterColumns = new Array<{itemName: string, itemList: Array<any>}>();
      this.columnNames.forEach(lis =>{
        let distnctArr = Array.from(new Set(this.data.map((item: any) => item[lis.Val]))).map(lis =>{
            return {items: lis, status: true};
        });
        let colName = lis.Key;
        let item = {
            itemName: colName,
            itemList: distnctArr
        };
        this.filterColumns.push(item);
      });
      console.log(this.filterColumns);
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
        data.push({
            id: countries.length,
            country: countries[2],
            sales: Math.random() * 10000,
            expenses: Math.random() * 5000
        });
        return data;
    }

    private _updateCurrentInfo() {
        this.selectedItem = wjcCore.format(
            'Country: <b>{country}</b>, Sales: <b>{sales:c0}</b> Expenses: <b>{expenses:c0}</b>',
            this.flex.collectionView.currentItem);
    }

    tooltipContent(hti: wjChart.HitTestInfo) {
        let item = hti.item;
        debugger;
        return `<b>Country: </b>${item.country} <img src="resources/${item.country}.png" /></br>downloads: ${item.downloads}</br>sales: ${item.sales}`;
    } 
    //
    getRandomPalette() {
        let palettes = Object.getOwnPropertyNames(wjChart.Palettes)
          .filter(prop => typeof wjChart.Palettes[prop] === "object" && prop !== 'prototype');
        let rand = Math.floor(Math.random() * palettes.length);
        //
        return wjChart.Palettes[palettes[rand]];
    }
    flexCInitialized(flex){
        console.log(this);
        this.flexC.tooltip.position = 1;
    }

    openContextMenu(
        event: MouseEvent,
        trigger: MatMenuTrigger,
        triggerElement: HTMLElement
      ) {
        triggerElement.style.left = event.clientX + -25 + "px";
        triggerElement.style.top = event.clientY + 5 + "px";
        if (trigger.menuOpen) {
          trigger.closeMenu();
          trigger.openMenu();
        } else {
          trigger.openMenu();
        }
        event.preventDefault();
      }
      makeChange(item, cl, ct){
        console.log(item.status);
        item.status=!item.status;
        let items : Array<{itemName: string, itemList: Array<any>}> ;
        items = this.filterColumns.filter(lis=>lis.itemName === ct);
        this.data = this._getData().filter(lis => items[0].itemList.filter(l => lis[items[0].itemName.toLowerCase()] === l.items)[0].status);
      }
}
