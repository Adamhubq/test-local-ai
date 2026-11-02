import { Component, Input, Output, EventEmitter } from '@angular/core';

export type ChipType = 'neutral' | 'accent' | 'success' | 'warning' | 'danger';

@Component({
  selector: 'nova-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss']
})
export class ChipComponent {
  @Input() type: ChipType = 'neutral';
  @Input() label: string = '';
  @Input() dismissible: boolean = false;
  
  @Output() dismissed = new EventEmitter<void>();

  onDismiss(): void {
    this.dismissed.emit();
  }
}