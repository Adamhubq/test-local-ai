import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-empty-state',
  templateUrl: './empty-state.component.html',
  styleUrls: ['./empty-state.component.scss']
})
export class EmptyStateComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() icon: string = '';
  @Input() actionLabel: string = '';
  @Input() showIcon: boolean = true;
  
  onAction(): void {
    // Action handler - can be overridden by parent component
  }
}