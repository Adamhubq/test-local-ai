import { Component, Input, forwardRef, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';

@Component({
  selector: 'ns-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SwitchComponent),
      multi: true
    }
  ]
})
export class SwitchComponent implements ControlValueAccessor {
  @Input() id?: string;
  @Input() label?: string;
  @Input() hint?: string;
  @Input() error?: string;
  @Input() disabled = false;
  @Input() required = false;

  private _checked = false;
  private uniqueId: string | null = null;

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
  writeValue(value: boolean): void {
    this.checked = value;
  }

  registerOnChange(fn: (value: boolean) => void): void {
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
  get switchId(): string {
    if (this.id) {
      return this.id;
    }
    return this.generateId('switch');
  }

  // Private methods for ControlValueAccessor
  private onChange = (value: boolean) => {};
  private onTouched = () => {};

  // Handle switch change
  onSwitchChange(): void {
    if (!this.disabled) {
      this.checked = !this.checked;
    }
  }

  // Handle keyboard events
  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.onSwitchChange();
    }
  }
}