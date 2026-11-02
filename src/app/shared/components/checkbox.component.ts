import { Component, Input, forwardRef, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';

@Component({
  selector: 'ns-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true
    }
  ]
})
export class CheckboxComponent implements ControlValueAccessor {
  @Input() id?: string;
  @Input() label?: string;
  @Input() hint?: string;
  @Input() error?: string;
  @Input() disabled = false;
  @Input() required = false;

  private _checked = false;
  private _indeterminate = false;

  constructor(@Optional() @Self() public ngControl: NgControl) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  get checked(): boolean {
    return this._checked;
  }

  set checked(value: boolean) {
    if (this._checked !== value) {
      this._checked = value;
      this._indeterminate = false; // When checked state changes, reset indeterminate
      this.onChange(value);
      this.onTouched();
    }
  }

  get indeterminate(): boolean {
    return this._indeterminate;
  }

  set indeterminate(value: boolean) {
    if (this._indeterminate !== value) {
      this._indeterminate = value;
      if (value) {
        this._checked = false; // When indeterminate, checked should be false
      }
      this.onChange(value ? null : this._checked);
      this.onTouched();
    }
  }

  // ControlValueAccessor methods
  writeValue(value: boolean | null): void {
    if (value === null) {
      this._indeterminate = true;
      this._checked = false;
    } else {
      this._checked = value;
      this._indeterminate = false;
    }
  }

  registerOnChange(fn: (value: boolean | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  // Private methods for ControlValueAccessor
  private onChange = (value: boolean | null) => {};
  private onTouched = () => {};

  // Handle checkbox change
  onCheckboxChange(): void {
    if (!this.disabled) {
      if (this._indeterminate) {
        this.checked = true;
      } else {
        this.checked = !this.checked;
      }
    }
  }

  // Handle keyboard events
  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.onCheckboxChange();
    }
  }
}