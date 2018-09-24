import { Component, OnInit } from '@angular/core';

import { MenuItemModel } from '@app/shared/interfaces/menu-item-model';

import { MenuItemListService } from '@app/shared/services/menu-item-list.service';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  menus : MenuItemModel[] = [];

  constructor(private menuItemListService: MenuItemListService) { }

  ngOnInit(): void {
    this.fetchMenus();
  }

  fetchMenus(): void {
    this.menuItemListService
      .fetchMenus()
      .subscribe(response => this.menus = response);
  }

}
