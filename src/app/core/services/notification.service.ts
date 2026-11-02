import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export type NotificationType = 'success' | 'error' | 'warning' | 'info';

export interface Notification {
  id: string;
  message: string;
  type: NotificationType;
  duration?: number; // in milliseconds
  dismissible?: boolean; // whether user can close it manually
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notificationsSubject = new Subject<Notification>();
  public notifications$ = this.notificationsSubject.asObservable();

  constructor() { }

  show(message: string, type: NotificationType, options?: { duration?: number; dismissible?: boolean }): void {
    const notification: Notification = {
      id: this.generateId(),
      message,
      type,
      duration: options?.duration ?? 5000, // default 5 seconds
      dismissible: options?.dismissible ?? true
    };

    this.notificationsSubject.next(notification);

    // Auto-dismiss if duration is set
    if (notification.duration !== undefined && notification.duration > 0) {
      setTimeout(() => {
        this.dismiss(notification.id);
      }, notification.duration);
    }
  }

  success(message: string, options?: { duration?: number; dismissible?: boolean }): void {
    this.show(message, 'success', options);
  }

  error(message: string, options?: { duration?: number; dismissible?: boolean }): void {
    this.show(message, 'error', options);
  }

  warning(message: string, options?: { duration?: number; dismissible?: boolean }): void {
    this.show(message, 'warning', options);
  }

  info(message: string, options?: { duration?: number; dismissible?: boolean }): void {
    this.show(message, 'info', options);
  }

  dismiss(id: string): void {
    // We could implement a more sophisticated dismissal system if needed
    // For now, we'll just emit a null notification to indicate dismissal
    // This approach keeps the API simple and allows for future expansion
  }

  private generateId(): string {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }
}