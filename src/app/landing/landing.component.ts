import { Component, OnInit } from '@angular/core';

import { MenuItemModel } from '@app/shared/interfaces/menu-item-model';


import {
  TotalUsersModel,
  AverageTimeModel,
  TotalMalesModel,
  TotalFemalesModel,
  TotalCollectionsModel } from '@app/shared/interfaces/sub-header-item-model';

import { MenuItemListService } from '@app/shared/services/menu-item-list.service';
import { SubHeaderService } from '@app/shared/services/sub-header-item-list.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  menus : MenuItemModel[] = [];
  // users : TotalUsersModel[] = [];

  public users      : TotalUsersModel[];
  public average    : AverageTimeModel[];
  public males      : TotalMalesModel[];
  public females    : TotalFemalesModel[];
  public collections: TotalCollectionsModel[];

  constructor(private menuItemListService: MenuItemListService,
              private subHeaderService: SubHeaderService) { }

  ngOnInit(): void {
    this.fetchMenus();

    this.subHeaderService.fetchSubHeaderData().subscribe(responseList => {
      this.users       = responseList[0];
      this.average     = responseList[1];
      this.males       = responseList[2];
      this.females     = responseList[3];
      this.collections = responseList[4];
      console.log('mydata' , responseList);
  });

  }

  fetchMenus(): void {
    this.menuItemListService
      .fetchMenus()
      .subscribe(response => this.menus = response);
  }

}
