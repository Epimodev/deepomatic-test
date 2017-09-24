import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import messages from '../../../messages';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent implements OnInit {
  @Input() title: string;
  @Input() nextIsActive: boolean;
  @Output() onPrev = new EventEmitter<void>();
  @Output() onNext = new EventEmitter<void>();
  hasPrev: boolean;
  hasNext: boolean;
  prevLabel = messages.BACK;
  nextLabel = messages.NEXT;

  ngOnInit() {
    this.hasPrev = this.onPrev.observers.length > 0;
    this.hasNext = this.onNext.observers.length > 0;
  }

  handlePrev() {
    this.onPrev.emit();
  }

  handleNext() {
    this.onNext.emit();
  }
}
