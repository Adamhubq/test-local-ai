import { Component } from '@angular/core';

@Component({
  selector: 'app-rating-example',
  template: `
    <div class="rating-example">
      <h3>Rating Component Examples</h3>
      
      <div class="rating-example__item">
        <h4>Basic Rating (read-only)</h4>
        <app-rating [rating]="3.5" [showCount]="true" [count]="128"></app-rating>
      </div>
      
      <div class="rating-example__item">
        <h4>Small Rating</h4>
        <app-rating [rating]="4.2" size="sm" [readOnly]="true"></app-rating>
      </div>
      
      <div class="rating-example__item">
        <h4>Large Rating with Half Star</h4>
        <app-rating [rating]="2.7" size="lg" [showCount]="true" [count]="45"></app-rating>
      </div>
      
      <div class="rating-example__item">
        <h4>Interactive Rating (not implemented in this version)</h4>
        <app-rating [rating]="3.0" [readOnly]="false"></app-rating>
      </div>
    </div>
  `,
  styles: [`
    .rating-example {
      padding: 1rem;
    }
    
    .rating-example__item {
      margin-bottom: 1rem;
    }
    
    h3, h4 {
      margin-top: 0;
      margin-bottom: 0.5rem;
    }
  `]
})
export class RatingExampleComponent {}