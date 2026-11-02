import { Component, Input, HostBinding } from '@angular/core';

export type IconButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
export type IconButtonSize = 'sm' | 'md' | 'lg';
export type ButtonType = 'button' | 'submit';

@Component({
  selector: 'ns-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss']
})
export class IconButtonComponent {
  @Input() variant: IconButtonVariant = 'primary';
  @Input() size: IconButtonSize = 'md';
  @Input() type: ButtonType = 'button';
  @Input() disabled = false;
  @Input() loading = false;
  @Input() fullWidth = false;
  @Input() ariaLabel!: string;

  @HostBinding('class') get hostClasses(): string {
    return [
      `ns-icon-button--${this.variant}`,
      `ns-icon-button--${this.size}`,
      { 'ns-icon-button--full-width': this.fullWidth },
      { 'ns-icon-button--loading': this.loading },
      { 'ns-icon-button--disabled': this.disabled }
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

  @HostBinding('attr.aria-label') get attrAriaLabel(): string {
    return this.ariaLabel;
  }
}