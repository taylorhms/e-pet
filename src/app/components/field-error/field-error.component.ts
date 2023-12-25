import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-field-error',
  templateUrl: './field-error.component.html',
  styleUrls: ['./field-error.component.css']
})
export class FieldErrorComponent {

  @Input() control: AbstractControl | null = null;
  @Input() errors: { error: string, message: string }[] = [];

  get message(): string | null {
    if (this.control == null || !(this.control.invalid && this.control.dirty)) {
      return null;
    }

    for (let error of this.errors) {
      if (this.control.hasError(error.error)) {
        return error.message;
      }
    }

    return null;
  }
}
