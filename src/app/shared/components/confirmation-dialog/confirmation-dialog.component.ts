import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { ModalAction } from '../modal/modal.component';

export interface ConfirmationDialogConfig {
  title: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  confirmType?: 'danger' | 'neutral';
  onConfirm: () => Promise<void> | void;
}

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent implements OnDestroy {
  @Input() config!: ConfirmationDialogConfig;
  @Output() confirmed = new EventEmitter<void>();
  @Output() cancelled = new EventEmitter<void>();

  isConfirming = false;

  get confirmAction(): ModalAction {
    return {
      label: this.config.confirmLabel || 'Confirm',
      type: 'submit',
      class: this.config.confirmType === 'danger' ? 'btn btn-danger' : 'btn btn-primary',
      handler: () => this.handleConfirm()
    };
  }

  get cancelAction(): ModalAction {
    return {
      label: this.config.cancelLabel || 'Cancel',
      type: 'button',
      class: 'btn btn-secondary'
    };
  }

  ngOnDestroy(): void {
    // Clean up any resources if needed
  }

  handleConfirm(): void {
    if (this.isConfirming) {
      return;
    }

    this.isConfirming = true;
    
    const confirmResult = this.config.onConfirm();
    
    // Handle both sync and async confirmation
    if (confirmResult instanceof Promise) {
      confirmResult.then(() => {
        this.isConfirming = false;
        this.confirmed.emit();
      }).catch(() => {
        this.isConfirming = false;
      });
    } else {
      this.isConfirming = false;
      this.confirmed.emit();
    }
  }

  handleCancel(): void {
    this.cancelled.emit();
  }
}