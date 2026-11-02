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

  onImageError(): void {
    // Handle image loading error
    // This method is called when an image fails to load
  }
}