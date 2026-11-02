import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-state',
  templateUrl: './error-state.component.html',
  styleUrls: ['./error-state.component.scss']
})
export class ErrorStateComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() icon: string = 'error';
  @Input() actionLabel: string = '';
  @Input() showIcon: boolean = true;
  
  onAction(): void {
    // Action handler - can be overridden by parent component
  }
}