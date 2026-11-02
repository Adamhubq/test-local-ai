import { Component, Input, forwardRef, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';

export interface SelectOption {
  value: any;
  label: string;
}

@Component({
  selector: 'ns-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true
    }
  ]
})
export class SelectComponent implements ControlValueAccessor {
  @Input() id?: string;
  @Input() label?: string;
  @Input() hint?: string;
  @Input() error?: string;
  @Input() disabled = false;
  @Input() required = false;
  @Input() options: SelectOption[] = [];

  private _value: any = null;

  constructor(@Optional() @Self() public ngControl: NgControl) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  get value(): any {
    return this._value;
  }

  set value(val: any) {
    if (this._value !== val) {
      this._value = val;
      this.onChange(val);
      this.onTouched();
    }
  }

  // ControlValueAccessor methods
  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  // Private methods for ControlValueAccessor
  private onChange = (value: any) => {};
  private onTouched = () => {};

  // Handle select change
  onSelectChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.value = target.value;
  }

  // Handle keyboard events
  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
    }
  }
}