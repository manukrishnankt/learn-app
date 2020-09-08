import { Component, OnInit } from '@angular/core';
import { RequestPage, Direction, FieldSet, Operator, FieldType, LogicalAND } from './util/request.page';

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.scss']
})
export class AdvancedSearchComponent implements OnInit {

  private requestPageBody: RequestPage = { page: 0, size: 10, doRollupSearch: true };
  constructor() { }

  ngOnInit(): void {
  }

}
