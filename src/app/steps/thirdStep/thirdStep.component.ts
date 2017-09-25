import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AppService } from '../../app.service';
import { DetectionType } from '../../app.types';
import messages from '../../../messages';

@Component({
  selector: 'app-third-step',
  templateUrl: './thirdStep.component.html',
  styleUrls: ['./thirdStep.component.scss']
})
export class ThirdStepComponent {
  service: AppService;
  @Output() onValid = new EventEmitter<any>();
  @Output() onBack = new EventEmitter<void>();
  uploadType = '';
  imageUrl = '';
  imageFile: File;
  messages = messages;

  constructor(service: AppService) {
    this.service = service;
  }

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
        url: this.imageUrl,
      });
    } else if (this.uploadType === 'file') {
      this.service.base64Image(this.imageFile).subscribe((value: string) => {
        this.onValid.emit({
          type: 'file',
          url: value,
        });
      });
    }
  }

  handleBack() {
    this.onBack.emit();
  }
}
