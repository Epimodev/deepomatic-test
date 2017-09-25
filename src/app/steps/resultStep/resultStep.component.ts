import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ImageArea } from '../../app.types';
import messages from '../../../messages';

@Component({
  selector: 'app-result-step',
  templateUrl: './resultStep.component.html',
  styleUrls: ['./resultStep.component.scss']
})
export class ResultStepComponent {
  title = messages.RESULT;
  @Input() imageSrc: string;
  @Input() imageAreas: ImageArea[];
  @Output() onBack = new EventEmitter<void>();

  handleBack() {
    this.onBack.emit();
  }
}
