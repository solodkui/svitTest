import { Component, OnInit } from '@angular/core';

import { Menu } from '../interfaces/menu';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {
  items: Menu[] = [
    {
      title: 'Віддих у трускавці',
      link: '#'
    },
    {
      title: 'Найкращі санаторії',
      link: '#'
    },
    {
      title: 'Санаторії з басейном',
      link: '#'
    },
    {
      title: 'Всі санаторії трускавця',
      link: '#'
    },
    {
      title: 'Готелі Трускавця',
      link: '#'
    },
    {
      title: 'Вілли Трускавця',
      link: '#'
    },
    {
      title: 'Санаторії Трускавця',
      link: '#'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
