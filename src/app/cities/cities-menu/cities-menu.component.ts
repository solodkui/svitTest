import { Component, Input, OnInit } from '@angular/core';

import { Menu } from '../../interfaces/menu';

@Component({
  selector: 'app-cities-menu',
  templateUrl: './cities-menu.component.html',
  styleUrls: ['./cities-menu.component.scss']
})
export class CitiesMenuComponent implements OnInit {
  @Input() items: Menu;

  constructor() { }

  ngOnInit() {
  }

}
