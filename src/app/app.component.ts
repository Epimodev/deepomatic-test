import { Component } from '@angular/core';
import { AppService } from './app.service';
import messages from '../messages';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentStep = 0;
  detectionType = '';
  imageUrl = '';
  isDetecting = false;
  imageAreas = [];

  constructor(private service: AppService) {}

  setCurrentStep(newStep) {
    this.currentStep = newStep;
  }

  setDetectionType(newDetectionType: string) {
    this.detectionType = newDetectionType;
  }

  launchDetetion(imageInfo) {
    this.imageAreas = [];
    this.imageUrl = imageInfo.url;
    this.currentStep = 3;

    this.service.imageDetection(this.detectionType, imageInfo.url, imageInfo.type)
      .map(this.service.formatData)
      .subscribe({
        next: (areas) => {
          this.imageAreas = areas;
        },
        error: (error) => {
          console.log(error);
          alert(messages.DETECTION_ERROR);
          this.currentStep = 2;
        }
      });
  }
}
