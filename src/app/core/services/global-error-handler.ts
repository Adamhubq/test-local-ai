import { ErrorHandler, Injectable } from '@angular/core';
import { ErrorHandlerService } from './error-handler.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  
  constructor(private errorHandlerService: ErrorHandlerService) {}

  handleError(error: any): void {
    // Handle the error using our custom error handler service
    this.errorHandlerService.handleUncaughtError(error);
    
    // In development, we still want to log the full error for debugging
    if (typeof window !== 'undefined') {
      const env = (window as any).environment;
      if (env && !env.production) {
        console.error('Global Error Handler caught:', error);
      }
    }
    
    // For production, we don't show technical details to users
    // but we log them for debugging purposes
  }
}