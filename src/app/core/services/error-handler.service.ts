import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {
  
  /**
   * Handles application errors and returns an observable with error information
   * @param error - The error object
   * @param operation - Name of the operation that failed
   * @returns Observable with error message
   */
  handleError<T>(error: unknown, operation = 'operation'): Observable<never> {
    let errorMessage = '';

    // Handle different types of errors
    if (error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Client-side error: ${error.message}`;
    } else if ((error as { status?: number }).status) {
      // Server-side errors
      errorMessage = `Server error: ${(error as { status?: number }).status} - ${(error as { message?: string }).message || ''}`;
    } else {
      // Unknown errors
      errorMessage = `Unknown error: ${(error as { message?: string }).message || String(error)}`;
    }

    // Log the error for development purposes
    console.error(`${operation} failed:`, error);

    // In production, we don't want to expose technical details to users
    // But we still log them for debugging purposes
    if (typeof window !== 'undefined') {
      try {
        const env = (window as { environment?: { production?: boolean } }).environment;
        if (env && !env.production) {
          // Development environment - show more details in console
          console.error(`Error in ${operation}:`, error);
        }
      } catch (e) {
        // If we can't access environment, just proceed without logging extra details
      }
    }

    // Return a user-friendly error message
    return throwError(() => new Error(this.getFriendlyErrorMessage(error)));
  }

  /**
   * Gets a friendly error message for display to users
   * @param error - The error object
   * @returns User-friendly error message
   */
  private getFriendlyErrorMessage(error: unknown): string {
    // Default message
    let message = 'Произошла ошибка. Пожалуйста, попробуйте позже.';
    
    if ((error as { status?: number }).status === 404) {
      message = 'Запрашиваемый ресурс не найден.';
    } else if ((error as { status?: number }).status === 500) {
      message = 'Внутренняя ошибка сервера. Пожалуйста, попробуйте позже.';
    } else if ((error as { status?: number }).status === 401) {
      message = 'Доступ запрещен. Пожалуйста, войдите в систему.';
    } else if ((error as { status?: number }).status === 403) {
      message = 'У вас нет прав для выполнения этого действия.';
    } else if ((error as { error?: { message?: string } }).error?.message) {
      // If there's a specific error message from the API
      message = (error as { error?: { message?: string } }).error!.message!;
    }

    return message;
  }

  /**
   * Handles uncaught errors in the application
   * @param error - The error object
   */
  handleUncaughtError(error: unknown): void {
    console.error('Uncaught Error:', error);
    
    // In production, we might want to send error reports to a service
    if (typeof window !== 'undefined') {
      try {
        const env = (window as { environment?: { production?: boolean } }).environment;
        if (env && env.production) {
          // Send error to monitoring service in production
          this.sendErrorToMonitoringService(error);
        }
      } catch (e) {
        // If we can't access environment, just proceed without sending to monitoring
      }
    }
  }

  /**
   * Sends error to monitoring service (placeholder for integration)
   * @param error - The error object
   */
  private sendErrorToMonitoringService(error: unknown): void {
    // Placeholder for actual monitoring service integration
    // Example with Sentry:
    // Sentry.captureException(error);
    console.log('Error sent to monitoring service:', error);
  }

  /**
   * Handles asynchronous operation errors (like HTTP requests)
   * @param error - The error object
   * @returns Observable with error message
   */
  handleAsyncError<T>(error: unknown): Observable<never> {
    return this.handleError(error, 'async operation');
  }
}