import { Component, Input } from '@angular/core';
import { ImageArea, Rectangle } from '../../app.types';

@Component({
  selector: 'app-analized-image',
  templateUrl: './analizedImage.component.html',
  styleUrls: ['./analizedImage.component.scss']
})
export class AnalizedImageComponent {
  @Input() src: string;
  @Input() areas: ImageArea[] = [];
  imageRectangle: Rectangle = {
    width: 0,
    height: 0,
  };

  setRectangle(event: Event) {
    const target = <HTMLInputElement>event.target;
    this.imageRectangle = {
      width: target.clientWidth,
      height: target.clientHeight,
    };
  }
}
