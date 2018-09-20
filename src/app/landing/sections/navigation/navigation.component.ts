import { Component, OnInit, Input } from '@angular/core';

import { MenuItemModel } from '@app/shared/interfaces/menu-item-model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  @Input() list: MenuItemModel[];
  constructor() { }

  ngOnInit(): void {}

}
