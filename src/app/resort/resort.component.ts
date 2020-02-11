import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-resort',
  templateUrl: './resort.component.html',
  styleUrls: ['./resort.component.scss']
})
export class ResortComponent implements OnInit {
  @Input() image: string = 'resort1'
  // Icons
  @Input() spa: boolean = true;
  @Input() wifi: boolean = true;
  @Input() abc: boolean = true;
  @Input() p: boolean = true;
  @Input() food: boolean = true;

  // Hashtags
  @Input() best: boolean = true;
  @Input() discount: boolean = true;
  @Input() pool: boolean = true;
  @Input() thermal: boolean = true;
  @Input() spaH: boolean = true;

  // Title
  @Input() title: string = 'default title';
  
  // Subtitle
  @Input() subtitle: string = 'default subtitle';

  // Price
  @Input() priceNow: string = '1000';
  @Input() priceLast: string = '1000';
  @Input() green: boolean = false;

  // People
  @Input() people: number = 1;

  constructor() { }

  ngOnInit() {
  }

}
