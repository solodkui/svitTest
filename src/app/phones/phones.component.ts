import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.scss']
})
export class PhonesComponent implements OnInit {
  @Input() type: string = '';

  constructor() { }

  ngOnInit() {
  }

}
