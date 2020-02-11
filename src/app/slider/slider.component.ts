import { Component, OnInit } from '@angular/core';

import { TweenMax } from 'gsap'

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  slide: string = '../../assets/slide.jpg';
  slideNumber: number = 1;

  constructor() { }

  ngOnInit() {
  }

  changeImage(side: string) {
    if(side == 'left') {
      if(this.slideNumber == 1) {
        this.animationSlide('.js-slider-img', '../../assets/slide.jpg')
        this.slideNumber = 3
      } else if(this.slideNumber == 2) {
        this.animationSlide('.js-slider-img', '../../assets/slide.jpg')
        this.slideNumber = 1
      } else if(this.slideNumber == 3) {
        this.animationSlide('.js-slider-img', '../../assets/slide.jpg')
        this.slideNumber = 2
      }
    } else if(side == 'right') {
      if(this.slideNumber == 1) {
        this.animationSlide('.js-slider-img', '../../assets/slide.jpg')
        this.slideNumber = 2
      } else if(this.slideNumber == 2) {
        this.animationSlide('.js-slider-img', '../../assets/slide.jpg')
        this.slideNumber = 3
      } else if(this.slideNumber == 3) {
        this.animationSlide('.js-slider-img', '../../assets/slide.jpg')
        this.slideNumber = 1
      }
    }
  }

  animationSlide(item: string, src: string) {
    TweenMax.to(item, 0.3, {
      opacity: 0,
      yoyo: true,
      repeat: 1
    });
    setTimeout(() => {
      this.slide = src;
    }, 300)
  }
}
