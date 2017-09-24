import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DetectionType } from '../../app.types';
import messages from '../../../messages';

@Component({
  selector: 'app-second-step',
  templateUrl: './secondStep.component.html',
  styleUrls: ['./secondStep.component.scss']
})
export class SecondStepComponent {
  @Input() selectedType: string;
  @Output() onChangeType = new EventEmitter<string>();
  @Output() onValid = new EventEmitter<void>();
  title = messages.WHAT_DETECT;
  types: DetectionType[] = [
    {
      label: messages.FASHION,
      value: 'fashion',
      color: '#408956',
    },
    {
      label: messages.FURNITURE,
      value: 'furnitures',
      color: '#67463A',
    },
    {
      label: messages.WEAPONS,
      value: 'weapons',
      color: '#464646',
    },
  ];

  handleChangeType(type: string) {
    if (type === this.selectedType) {
      this.onChangeType.emit('');
    } else {
      this.onChangeType.emit(type);
    }
  }

  validStep() {
    this.onValid.emit();
  }
}
