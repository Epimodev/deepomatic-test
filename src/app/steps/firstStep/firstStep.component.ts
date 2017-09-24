import { Component, EventEmitter, Output } from '@angular/core';
import messages from '../../../messages';

@Component({
  selector: 'app-first-step',
  templateUrl: './firstStep.component.html',
})
export class FirstStepComponent {
  @Output() onStart = new EventEmitter<void>();
  title = messages.HELLO;
  sentences = [
    messages.WELCOME_IN_DEMO,
    messages.YOU_CAN_DETECT_OBJECTS
  ];

  handleStart() {
    this.onStart.emit();
  }
}
