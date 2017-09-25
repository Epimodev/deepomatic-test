import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DetectionType } from '../../app.types';
import messages from '../../../messages';

@Component({
  selector: 'app-third-step',
  templateUrl: './thirdStep.component.html',
  styleUrls: ['./thirdStep.component.scss']
})
export class ThirdStepComponent {
  @Output() onValid = new EventEmitter<void>();
  uploadType = '';
  imageUrl = '';
  messages = messages;

  setUploadType(newType: string) {
    if (newType === this.uploadType) {
      this.uploadType = '';
    } else {
      this.uploadType = newType;
    }
  }

  setImageUrl(newUrl: string) {
    this.imageUrl = newUrl;
  }

  validStep() {
    this.onValid.emit();
  }
}
