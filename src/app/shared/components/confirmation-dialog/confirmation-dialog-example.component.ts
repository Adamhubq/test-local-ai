import { Component } from '@angular/core';
import { ConfirmationDialogComponent, ConfirmationDialogConfig } from './confirmation-dialog.component';

@Component({
  selector: 'app-confirmation-dialog-example',
  template: `
    <div class="confirmation-dialog-example">
      <h3>Confirmation Dialog Example</h3>
      
      <button (click)="openDangerDialog()" class="btn btn-danger">Delete Item (Danger)</button>
      <button (click)="openNeutralDialog()" class="btn btn-secondary">Archive Item (Neutral)</button>
      
      <app-confirmation-dialog
        *ngIf="dialogConfig"
        [config]="dialogConfig"
        (confirmed)="onConfirm()"
        (cancelled)="onCancel()"
      ></app-confirmation-dialog>
    </div>
  `,
  styles: [`
    .confirmation-dialog-example {
      padding: 20px;
    }
    
    .confirmation-dialog-example button {
      margin-right: 10px;
      margin-bottom: 10px;
    }
  `]
})
export class ConfirmationDialogExampleComponent {
  dialogConfig: ConfirmationDialogConfig | null = null;

  openDangerDialog(): void {
    this.dialogConfig = {
      title: 'Delete Item',
      message: 'Are you sure you want to delete this item? This action cannot be undone.',
      confirmLabel: 'Delete',
      cancelLabel: 'Cancel',
      confirmType: 'danger',
      onConfirm: () => {
        // Simulate async operation
        return new Promise(resolve => {
          setTimeout(() => {
            console.log('Item deleted');
            resolve();
          }, 1000);
        });
      }
    };
  }

  openNeutralDialog(): void {
    this.dialogConfig = {
      title: 'Archive Item',
      message: 'Are you sure you want to archive this item?',
      confirmLabel: 'Archive',
      cancelLabel: 'Cancel',
      confirmType: 'neutral',
      onConfirm: () => {
        console.log('Item archived');
      }
    };
  }

  onConfirm(): void {
    console.log('Confirmation received');
    this.dialogConfig = null;
  }

  onCancel(): void {
    console.log('Cancelled');
    this.dialogConfig = null;
  }
}