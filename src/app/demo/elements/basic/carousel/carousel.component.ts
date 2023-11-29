import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import {CardModule} from "../../../../theme/shared/components";

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CardModule, NgOptimizedImage],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {

  carousel : string[] = [
    'assets/images/slider/img-slide-4.jpg',
    'assets/images/slider/img-slide-3.jpg',
    'assets/images/slider/img-slide-1.jpg',
    'assets/images/slider/img-slide-2.jpg'
  ]

}
