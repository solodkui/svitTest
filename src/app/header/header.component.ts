import { Component, OnInit } from '@angular/core';

import { TweenMax } from 'gsap'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  phonesType: string =  'header';
  language: string = 'UA';
  open: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  openLanguage() {
    if(this.open) {
      TweenMax.to('.js-header-icon', 0.3, {
        rotation: '0'
      });
      console.log('Close Language Menu');
    } else {
      TweenMax.to('.js-header-icon', 0.3, {
        rotation: '180deg'
      });
      console.log('Open Language Menu');
    }
    this.open = !this.open;
  }
}
