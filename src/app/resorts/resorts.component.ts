import { Component, OnInit } from '@angular/core';

import { ResortsService } from '../services/resorts.service';

@Component({
  selector: 'app-resorts',
  templateUrl: './resorts.component.html',
  styleUrls: ['./resorts.component.scss']
})
export class ResortsComponent implements OnInit {

  constructor(public resortsService: ResortsService) { }

  ngOnInit() {
  }

}
