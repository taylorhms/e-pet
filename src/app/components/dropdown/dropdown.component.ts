import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
  providers: [
    { 
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => DropdownComponent),
    }
  ]
})
export class DropdownComponent implements ControlValueAccessor {

  @Input() itens: any[] = [];
  @Input() itemLabel: string = 'label';
  @Input() itemValue?: string;
  @Input() required?: string | boolean;
  @Input() disabled?: string | boolean;
  @Input() inputId: any = DropdownComponent.gerarId();
  @Input() label: string = 'Selecione...';

  selectedIndex?: number;

  select(index?: number) {
    if (this.itemValue) {
      this.value = ('undefined' !== typeof index) ? this.itens[index][this.itemValue] : null;
    } else {
      this.value = ('undefined' !== typeof index) ? this.itens[index] : null;
    }

    this.onChange(this.value);
  }

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
    return 'dropdown-' + DropdownComponent._id++;
  }
}
