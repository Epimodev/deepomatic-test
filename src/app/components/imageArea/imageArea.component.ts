import { Component, Input } from '@angular/core';
import { ImageArea, Rectangle } from '../../app.types';

@Component({
  selector: 'app-image-area',
  templateUrl: './imageArea.component.html',
  styleUrls: ['./imageArea.component.scss']
})
export class ImageAreaComponent {
  @Input() rectangle: Rectangle;
  @Input() area: ImageArea;
  showArea = false;

  getPointX() {
    const xMaxInPx = this.area.xmax * this.rectangle.width;
    const xMinInPx = this.area.xmin * this.rectangle.width;
    const xSemiDistance = (xMaxInPx - xMinInPx) / 2;
    const xPosition = xMinInPx + xSemiDistance;
    const roundedPosition = Math.round(xPosition);
    return `${roundedPosition}px`;
  }

  getPointY() {
    const yMaxInPx = this.area.ymax * this.rectangle.height;
    const yMinInPx = this.area.ymin * this.rectangle.height;
    const ySemiDistance = (yMaxInPx - yMinInPx) / 2;
    const yPosition = yMinInPx + ySemiDistance;
    const roundedPosition = Math.round(yPosition);
    return `${roundedPosition}px`;
  }

  getAreaTop() {
    const topPosition = this.area.ymin * this.rectangle.height;
    const roundedPosition = Math.round(topPosition);
    return `${roundedPosition}px`;
  }

  getAreaLeft() {
    const leftPosition = this.area.xmin * this.rectangle.width;
    const roundedPosition = Math.round(leftPosition);
    return `${roundedPosition}px`;
  }

  getAreaWidth() {
    const xMaxInPx = this.area.xmax * this.rectangle.width;
    const xMinInPx = this.area.xmin * this.rectangle.width;
    const width = (xMaxInPx - xMinInPx);
    const roundedWidth = Math.round(width);
    return `${roundedWidth}px`;
  }

  getAreaHeight() {
    const yMaxInPx = this.area.ymax * this.rectangle.height;
    const yMinInPx = this.area.ymin * this.rectangle.height;
    const height = (yMaxInPx - yMinInPx);
    const roundedHeight = Math.round(height);
    return `${roundedHeight}px`;
  }

  openArea() {
    this.showArea = true;
  }

  closeArea() {
    this.showArea = false;
  }
}
