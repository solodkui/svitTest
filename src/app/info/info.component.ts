import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var SimpleBar: any;

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  @ViewChild("scrollBar", {static: true}) scrollBar: ElementRef;

  constructor() { }

  ngOnInit() {
    new SimpleBar(this.scrollBar.nativeElement , {
      autoHide: false
    })
  }

}
