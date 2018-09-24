import { Component, OnInit, Input } from '@angular/core';

import {
  TotalUsersModel,
  AverageTimeModel,
  TotalMalesModel,
  TotalFemalesModel,
  TotalCollectionsModel } from '@app/shared/interfaces/sub-header-item-model';

import { SubHeaderService } from '@app/shared/services/sub-header-item-list.service';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.css']
})
export class SubHeaderComponent implements OnInit {

  public users      : TotalUsersModel[];
  public average    : AverageTimeModel[];
  public males      : TotalMalesModel[];
  public females    : TotalFemalesModel[];
  public collections: TotalCollectionsModel[];

  constructor(private subHeaderService: SubHeaderService) { }

  ngOnInit() {
    this.subHeaderService.fetchSubHeaderData().subscribe(responseList => {
      this.users       = responseList[0];
      this.average     = responseList[1];
      this.males       = responseList[2];
      this.females     = responseList[3];
      this.collections = responseList[4];
    });
    console.log('users', this.average);
  }


}
