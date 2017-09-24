import { Component } from '@angular/core';
import messages from '../../../messages';

@Component({
  selector: 'app-first-step',
  templateUrl: './firstStep.component.html',
})
export class FirstStepComponent {
  title = messages.HELLO;
  sentences = [
    messages.WELCOME_IN_DEMO,
    messages.YOU_CAN_DETECT_OBJECTS
  ];

  start() {
    console.log('start app');
  }
}
