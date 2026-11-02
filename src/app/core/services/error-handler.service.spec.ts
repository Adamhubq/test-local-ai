import { TestBed } from '@angular/core/testing';
import { ErrorHandlerService } from './error-handler.service';

describe('ErrorHandlerService', () => {
  let service: ErrorHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should handle client-side errors', () => {
    const error = new Error('Test client error');
    error.name = 'Error';
    
    expect(() => {
      service.handleError(error, 'test operation');
    }).toThrow();
  });

  it('should handle server errors with status codes', () => {
    const error = {
      status: 500,
      message: 'Internal Server Error'
    };
    
    expect(() => {
      service.handleError(error, 'test operation');
    }).toThrow();
  });
});