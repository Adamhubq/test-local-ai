import { Component, Input, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Notification } from '../../../core/services/notification.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit, OnDestroy {
  @Input() notification!: Notification;
  @Input() isVisible = false;
  
  @Output() dismiss = new EventEmitter<string>();

  private timeoutId: any;

  ngOnInit(): void {
    if (this.notification.duration && this.notification.duration > 0) {
      this.timeoutId = setTimeout(() => {
        this.dismissNotification();
      }, this.notification.duration);
    }
  }

  ngOnDestroy(): void {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  dismissNotification(): void {
    if (this.notification.dismissible !== false) {
      this.dismiss.emit(this.notification.id);
    }
  }

  getIcon(): string {
    switch (this.notification.type) {
      case 'success':
        return '✓';
      case 'error':
        return '✕';
      case 'warning':
        return '⚠';
      case 'info':
        return 'ℹ';
      default:
        return 'ℹ';
    }
  }

  getAriaLive(): string {
    switch (this.notification.type) {
      case 'success':
        return 'polite';
      case 'error':
        return 'assertive';
      case 'warning':
        return 'polite';
      case 'info':
        return 'polite';
      default:
        return 'polite';
    }
  }

  getAriaLabel(): string {
    switch (this.notification.type) {
      case 'success':
        return 'Success notification';
      case 'error':
        return 'Error notification';
      case 'warning':
        return 'Warning notification';
      case 'info':
        return 'Information notification';
      default:
        return 'Notification';
    }
  }
}