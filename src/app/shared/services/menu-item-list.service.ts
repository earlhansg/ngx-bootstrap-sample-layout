import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { MenuItemModel } from '../interfaces/menu-item-model';

import { menus } from '../data/menu-item-list';


@Injectable()
export class UserService {

  constructor() { }

  fetchMenus(): Observable<MenuItemModel[]> {
    return of(menus);
  }

}