import { Component } from '@angular/core';
import { ModalAction } from './modal.component';

@Component({
  selector: 'app-modal-example',
  template: `
    <div class="modal-example">
      <button (click)="openModal()" class="btn btn-primary">Open Modal</button>
      
      <app-modal
        [title]="'Example Modal'"
        [isVisible]="isModalVisible"
        [actions]="modalActions"
        [closeOnBackdropClick]="true"
        [closeOnEscape]="true"
        (closed)="onModalClose()"
        (actionClicked)="onActionClick($event)"
      >
        <p>This is the modal content. You can put any content here.</p>
        <p>It supports multiple lines of text and other components.</p>
      </app-modal>
    </div>
  `
})
export class ModalExampleComponent {
  isModalVisible = false;
  
  modalActions: ModalAction[] = [
    {
      label: 'Cancel',
      type: 'button',
      class: 'btn btn-secondary'
    },
    {
      label: 'Confirm',
      type: 'submit',
      class: 'btn btn-primary',
      handler: () => {
        console.log('Confirm action clicked');
      }
    }
  ];

  openModal(): void {
    this.isModalVisible = true;
  }

  onModalClose(): void {
    this.isModalVisible = false;
  }

  onActionClick(action: ModalAction): void {
    console.log('Action clicked:', action.label);
    if (action.label === 'Confirm') {
      // Handle confirm logic here
      this.onModalClose();
    } else if (action.label === 'Cancel') {
      // Handle cancel logic here
      this.onModalClose();
    }
  }
}