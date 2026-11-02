import { Component } from '@angular/core';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent {
  handleAction(): void {
    // Implementation of the action handling
    console.log('Confirmation dialog action handled');
  }
}