import { Component } from '@angular/core';

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

  setCurrentStep(newStep) {
    this.currentStep = newStep;
  }

  setDetectionType(newDetectionType: string) {
    this.detectionType = newDetectionType;
  }

  launchDetetion(imageInfo) {
    this.imageUrl = imageInfo.url;
    this.currentStep = 3;
  }
}
