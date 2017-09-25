import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentStep = 0;
  detectionType = '';
  isDetecting = false;

  setCurrentStep(newStep) {
    this.currentStep = newStep;
  }

  setDetectionType(newDetectionType: string) {
    this.detectionType = newDetectionType;
  }

  launchDetetion(imageInfo) {
    console.log(imageInfo);
  }
}
