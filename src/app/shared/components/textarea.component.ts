import { Component, Input, forwardRef, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';

@Component({
  selector: 'ns-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextareaComponent),
      multi: true
    }
  ]
})
export class TextareaComponent implements ControlValueAccessor {
  @Input() id?: string;
  @Input() label?: string;
  @Input() hint?: string;
  @Input() error?: string;
  @Input() disabled = false;
  @Input() required = false;
  @Input() placeholder?: string;
  @Input() rows = 4;

  private _value: string | null = null;
  private uniqueId: string | null = null;

  constructor(@Optional() @Self() public ngControl: NgControl) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  get value(): string | null {
    return this._value;
  }

  set value(val: string | null) {
    this._value = val;
    this.onChange(val);
    this.onTouched();
  }

  // ControlValueAccessor methods
  writeValue(value: string | null): void {
    this._value = value;
  }

  registerOnChange(fn: (value: string | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  // Generate unique ID
  private generateId(prefix: string): string {
    if (this.uniqueId) {
      return this.uniqueId;
    }
    this.uniqueId = prefix + '-' + Math.random().toString(36).substr(2, 9);
    return this.uniqueId;
  }

  // Get the ID to use (either provided or generated)
  get textareaId(): string {
    if (this.id) {
      return this.id;
    }
    return this.generateId('textarea');
  }

  // Private methods for ControlValueAccessor
  private onChange = (value: string | null) => {};
  private onTouched = () => {};

  // Handle input change
  onInputChange(event: Event): void {
    const target = event.target as HTMLTextAreaElement;
    this.value = target.value;
  }

  // Handle blur event
  onBlur(): void {
    this.onTouched();
  }
}