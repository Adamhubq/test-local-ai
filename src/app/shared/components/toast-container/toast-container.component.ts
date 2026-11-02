import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Notification, NotificationService } from '../../../core/services/notification.service';

@Component({
  selector: 'app-toast-container',
  templateUrl: './toast-container.component.html',
  styleUrls: ['./toast-container.component.scss']
})
export class ToastContainerComponent implements OnInit, OnDestroy {
  notifications: Notification[] = [];
  maxVisibleToasts = 5; // Limit the number of visible toasts
  private subscription!: Subscription;

  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.subscription = this.notificationService.notifications$.subscribe(notification => {
      // Add new notification
      this.notifications.push({ ...notification, isVisible: true });
      
      // Remove oldest notifications if we exceed the limit
      if (this.notifications.length > this.maxVisibleToasts) {
        this.notifications.shift();
      }
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  onDismiss(id: string): void {
    // Find and remove the notification with matching ID
    const index = this.notifications.findIndex(n => n.id === id);
    if (index !== -1) {
      this.notifications[index].isVisible = false;
      
      // Remove after animation completes
      setTimeout(() => {
        this.notifications = this.notifications.filter(n => n.id !== id);
      }, 300);
    }
  }

  getNotificationTypeClass(notification: Notification): string {
    return `toast--${notification.type}`;
  }
}