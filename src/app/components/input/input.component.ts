import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() label;
  @Input() value = '';
  @Output() onChange = new EventEmitter<string>();

  handleChange(event: KeyboardEvent) {
    const target = <HTMLInputElement>event.target;
    this.onChange.emit(target.value);
  }
}
