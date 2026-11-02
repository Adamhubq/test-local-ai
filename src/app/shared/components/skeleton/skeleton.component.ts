import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.scss']
})
export class SkeletonComponent {
  @Input() type: 'text' | 'image' | 'product-card' | 'block' = 'block';
  @Input() width: string = '100%';
  @Input() height: string = '100%';
  @Input() borderRadius: string = '0';
  @Input() animated: boolean = true;
}