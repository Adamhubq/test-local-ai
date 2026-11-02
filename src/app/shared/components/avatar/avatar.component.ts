import { Component, Input } from '@angular/core';

@Component({
  selector: 'nova-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent {
  @Input() src?: string;
  @Input() alt?: string;
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() fallbackIcon = 'person';
}