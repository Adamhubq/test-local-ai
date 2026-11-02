import { Component, Input, HostBinding } from '@angular/core';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonType = 'button' | 'submit';

@Component({
  selector: 'ns-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() variant: ButtonVariant = 'primary';
  @Input() size: ButtonSize = 'md';
  @Input() type: ButtonType = 'button';
  @Input() disabled = false;
  @Input() loading = false;
  @Input() fullWidth = false;
  @Input() ariaLabel?: string;

  @HostBinding('class') get hostClasses(): string {
    return [
      `ns-button--${this.variant}`,
      `ns-button--${this.size}`,
      { 'ns-button--full-width': this.fullWidth },
      { 'ns-button--loading': this.loading },
      { 'ns-button--disabled': this.disabled }
    ].filter(Boolean).join(' ');
  }

  @HostBinding('attr.type') get attrType(): string {
    return this.type;
  }

  @HostBinding('attr.aria-disabled') get attrAriaDisabled(): string | null {
    return this.disabled ? 'true' : null;
  }

  @HostBinding('attr.aria-busy') get attrAriaBusy(): string | null {
    return this.loading ? 'true' : null;
  }
}