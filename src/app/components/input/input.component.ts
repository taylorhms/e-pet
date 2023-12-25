import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [
    { 
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => InputComponent),
    }
  ]
})
export class InputComponent implements ControlValueAccessor {

  @Input() type: 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' |
      'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' |
      'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week' = 'text';
  @Input() readonly?: string | boolean;
  @Input() disabled?: string | boolean;
  @Input() size?: string | number;
  @Input() maxlength?: string | number;
  @Input() min?: string | number;
  @Input() max?: string | number;
  @Input() multiple?: string | boolean;
  @Input() pattern?: string;
  @Input() placeholder?: string;
  @Input() required?: string | boolean;
  @Input() step?: string | number;
  @Input() autofocus?: string | boolean;
  @Input() autocomplete?: 'on' | 'off';
  @Input() width?: string | number;
  @Input() height?: string | number;
  @Input() inputId: any = InputComponent.gerarId();
  @Input() label: string = 'Digite...';

  // ControlValueAccessor
  
  value: any = null;
  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: any): void {
    this.value = value;
    this.onChange(this.value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  /* ID Autoincrement */
  static _id = 1;

  static gerarId(): string {
    return 'input-' + InputComponent._id++;
  }
}

