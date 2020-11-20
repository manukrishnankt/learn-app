import { Component, ViewChild, OnDestroy, Inject } from '@angular/core';
import '@grapecity/wijmo.touch';
import * as wjcCore from '@grapecity/wijmo';
import * as wjcGrid from '@grapecity/wijmo.grid';
import { CellMaker, SparklineMarkers } from '@grapecity/wijmo.grid.cellmaker';
import { KeyValue, Country, DataService } from '../../service/data.service';
import { IExcelExportContext, ExportService } from '../../service/export.service';

@Component({
  selector: 'app-wijmo-learn',
  templateUrl: './wijmo-learn.component.html',
  styleUrls: ['./wijmo-learn.component.scss']
})
export class WijmoLearnComponent implements OnDestroy {
  private _itemsCount: number = 50;
  private _lastId: number = this._itemsCount;
  private _dataSvc: DataService;
  private _exportSvc: ExportService;
  private _itemsSource: wjcCore.CollectionView;
  private _productMap: wjcGrid.DataMap<number, KeyValue>;
  private _countryMap: wjcGrid.DataMap<number, Country>;
  private _colorMap: wjcGrid.DataMap<number, KeyValue>;
  private _historyCellTemplate: wjcGrid.ICellTemplateFunction;
  private _ratingCellTemplate: wjcGrid.ICellTemplateFunction;
  private _excelExportContext: IExcelExportContext;

  // references FlexGrid named 'flex' in the view
  @ViewChild('flex') flex: wjcGrid.FlexGrid;

  get productMap(): wjcGrid.DataMap<number, KeyValue> {
      return this._productMap;
  }

  get countryMap(): wjcGrid.DataMap<number, Country> {
      return this._countryMap;
  }

  get colorMap(): wjcGrid.DataMap<number, KeyValue> {
      return this._colorMap;
  }

  get itemsSource(): wjcCore.CollectionView {
      return this._itemsSource;
  }

  get itemsCount(): number {
      return this._itemsCount;
  }

  set itemsCount(value: number) {
      if (this._itemsCount != value) {
          this._itemsCount = value;
          this._handleItemsCountChange();
      }
  }

  get historyCellTemplate(): wjcGrid.ICellTemplateFunction {
      return this._historyCellTemplate;
  }

  get ratingCellTemplate(): wjcGrid.ICellTemplateFunction {
      return this._ratingCellTemplate;
  }

  get excelExportContext(): IExcelExportContext {
      return this._excelExportContext;
  }

  constructor(@Inject(DataService) dataSvc: DataService, @Inject(ExportService) exportSvc: ExportService) {
      this._dataSvc = dataSvc;
      this._exportSvc = exportSvc;

      // initializes items source
      this._itemsSource = this._createItemsSource();

      // initializes data maps
      this._productMap = this._buildDataMap(this._dataSvc.getProducts());
      this._countryMap = new wjcGrid.DataMap<number, Country>(this._dataSvc.getCountries(), 'id', 'name');
      this._colorMap = this._buildDataMap(this._dataSvc.getColors());

      // initializes cell templates
      this._historyCellTemplate = CellMaker.makeSparkline({
          markers: SparklineMarkers.High | SparklineMarkers.Low,
          maxPoints: 25,
          label: 'price history',
      });

      this._ratingCellTemplate = CellMaker.makeRating({
          range: [1, 5],
          label: 'rating'
      });

      // initializes export
      this._excelExportContext = {
          exporting: false,
          progress: 0,
          preparing: false
      };
  }

  ngOnDestroy() {
      const ctx = this._excelExportContext;
      this._exportSvc.cancelExcelExport(ctx);
  }

  getCountry(item: any) {
      const country = this._countryMap.getDataItem(item.countryId);
      return country ? country : Country.NotFound;
  }

  getColor(item: any) {
      const color = this._colorMap.getDataItem(item.colorId);
      return color ? color : KeyValue.NotFound;
  }

  getChangeCls(value: any) {
      if (wjcCore.isNumber(value)) {
          if (value > 0) {
              return 'change-up';
          }
          if (value < 0) {
              return 'change-down';
          }
      }
      return '';
  }

  exportToExcel() {
      const ctx = this._excelExportContext;
      if (!ctx.exporting) {
          this._exportSvc.startExcelExport(this.flex, ctx);
      } else {
          this._exportSvc.cancelExcelExport(ctx);
      }
  }

  exportToPdf() {
      this._exportSvc.exportToPdf(this.flex, {
          countryMap: this._countryMap,
          colorMap: this._colorMap,
          historyCellTemplate: this._historyCellTemplate
      });
  }

  private _createItemsSource(): wjcCore.CollectionView {
      const data = this._dataSvc.getData(this._itemsCount);
      const view = new wjcCore.CollectionView(data, {
          getError: (item: any, prop: any) => {
              const displayName = this.flex.columns.getColumn(prop).header;
              return this._dataSvc.validate(item, prop, displayName);
          }
      });
      view.collectionChanged.addHandler((s: wjcCore.CollectionView, e: wjcCore.NotifyCollectionChangedEventArgs) => {
          // initializes new added item with a history data
          if (e.action === wjcCore.NotifyCollectionChangedAction.Add) {
              e.item.history = this._dataSvc.getHistoryData();
              e.item.id = this._lastId;
              this._lastId++;
          }
      });
      return view;
  }

  private _disposeItemsSource(itemsSource: wjcCore.CollectionView): void {
      if (itemsSource) {
          itemsSource.collectionChanged.removeAllHandlers();
      }
  }

  // build a data map from a string array using the indices as keys
  private _buildDataMap(items: string[]): wjcGrid.DataMap<number, KeyValue> {
      const map: KeyValue[] = [];
      for (let i = 0; i < items.length; i++) {
          map.push({ key: i, value: items[i] });
      }
      return new wjcGrid.DataMap<number, KeyValue>(map, 'key', 'value');
  }

  private _handleItemsCountChange() {
      this._disposeItemsSource(this._itemsSource);

      this._lastId = this._itemsCount;
      this._itemsSource = this._createItemsSource();
  }
  itemFormatter = (panel, r, c, cell) => {
  }
}
