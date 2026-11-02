import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent {
  @Input() rating: number = 0;
  @Input() maxRating: number = 5;
  @Input() readOnly: boolean = true;
  @Input() showCount: boolean = false;
  @Input() count: number = 0;
  @Input() size: 'sm' | 'md' | 'lg' = 'md';

  get filledStars(): number {
    return Math.floor(this.rating);
  }

  get hasHalfStar(): boolean {
    return this.rating % 1 >= 0.5;
  }

  get emptyStars(): number {
    return this.maxRating - this.filledStars - (this.hasHalfStar ? 1 : 0);
  }

  get sizeClass(): string {
    switch (this.size) {
      case 'sm': return 'rating--small';
      case 'lg': return 'rating--large';
      default: return 'rating--medium';
    }
  }
}