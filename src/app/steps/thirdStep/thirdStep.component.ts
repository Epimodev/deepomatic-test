import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DetectionType } from '../../app.types';
import messages from '../../../messages';

@Component({
  selector: 'app-third-step',
  templateUrl: './thirdStep.component.html',
  styleUrls: ['./thirdStep.component.scss']
})
export class ThirdStepComponent {
  @Output() onValid = new EventEmitter<any>();
  @Output() onBack = new EventEmitter<void>();
  uploadType = '';
  imageUrl = '';
  imageFile: File;
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

  setImageFile(newFile: File) {
    this.imageFile = newFile;
  }

  getInputLabel() {
    if (this.imageFile) {
      return this.imageFile.name;
    }
    return messages.CLICK_OR_DROP_FILE;
  }

  stepIsValid() {
    if (this.uploadType === 'url') {
      return !!this.imageUrl;
    } else if (this.uploadType === 'file') {
      return !!this.imageFile;
    }

    return false;
  }

  validStep() {
    if (this.uploadType === 'url') {
      this.onValid.emit({
        type: 'url',
        data: this.imageUrl,
      });
    } else if (this.uploadType === 'file') {
      this.onValid.emit({
        type: 'file',
        data: this.imageFile,
      });
    }
  }

  handleBack() {
    this.onBack.emit();
  }
}
