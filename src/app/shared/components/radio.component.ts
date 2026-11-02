import { Component, Input, forwardRef, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';

@Component({
  selector: 'ns-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioComponent),
      multi: true
    }
  ]
})
export class RadioComponent implements ControlValueAccessor {
  @Input() id?: string;
  @Input() label?: string;
  @Input() hint?: string;
  @Input() error?: string;
  @Input() disabled = false;
  @Input() required = false;
  @Input() value: any;

  private _checked = false;

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
      this.onChange(value);
      this.onTouched();
    }
  }

  // ControlValueAccessor methods
  writeValue(value: any): void {
    if (value === this.value) {
      this.checked = true;
    } else {
      this.checked = false;
    }
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

  // Generate unique ID
  generateId(prefix: string): string {
    return prefix + '-' + Math.random().toString(36).substr(2, 9);
  }

  // Get group name for radio button grouping
  getGroupName(): string {
    return this.id || 'radio-group-' + Math.random().toString(36).substr(2, 9);
  }

  // Handle radio change
  onRadioChange(): void {
    if (!this.disabled) {
      this.checked = true;
      this.onChange(this.value);
    }
  }

  // Handle keyboard events
  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.onRadioChange();
    }
  }
}