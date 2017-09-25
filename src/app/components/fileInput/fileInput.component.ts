import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-file-input',
  templateUrl: './fileInput.component.html',
  styleUrls: ['./fileInput.component.scss']
})
export class FileInputComponent implements OnInit, OnDestroy {
  @Input() label = '';
  @Output() onChange = new EventEmitter<File>();
  isDragOver = false;

  ngOnInit() {
    window.addEventListener('dragover', this.preventWindowDropEvent);
    window.addEventListener('drop', this.preventWindowDropEvent);
  }

  ngOnDestroy() {
    window.removeEventListener('dragover', this.preventWindowDropEvent);
    window.removeEventListener('drop', this.preventWindowDropEvent);
  }

  preventWindowDropEvent(event: Event) {
    event.stopPropagation();
    event.preventDefault();
  }

  dragEnter() {
    this.isDragOver = true;
  }

  dragLeave() {
    this.isDragOver = false;
  }

  dropFile(event: DragEvent) {
    this.isDragOver = false;
    const file = event.dataTransfer.files[0];
    this.onChange.emit(file);
  }

  handleChangeFile(event: Event) {
    const target = <HTMLInputElement>event.target;
    const file = target.files[0];
    this.onChange.emit(file);
    target.value = ''; // reset input value
  }
}
