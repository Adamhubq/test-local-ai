import { Component, Input } from '@angular/core';

export type BadgeType = 'neutral' | 'accent' | 'success' | 'warning' | 'danger';

@Component({
  selector: 'nova-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent {
  @Input() type: BadgeType = 'neutral';
  @Input() label: string = '';
}