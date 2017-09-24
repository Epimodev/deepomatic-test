import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-check-button',
  templateUrl: './checkButton.component.html',
  styleUrls: ['./checkButton.component.scss']
})
export class CheckButtonComponent {
  @Input() label: string;
  @Input() selected: boolean;
  @Input() color: string;
  @Output() onClick = new EventEmitter<void>();

  handleClick() {
    this.onClick.emit();
  }
}
