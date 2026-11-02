import { GlobalErrorHandler } from './global-error-handler';
import { ErrorHandlerService } from './error-handler.service';

describe('GlobalErrorHandler', () => {
  let errorHandler: GlobalErrorHandler;
  let mockErrorHandlerService: jasmine.SpyObj<ErrorHandlerService>;

  beforeEach(() => {
    mockErrorHandlerService = jasmine.createSpyObj<ErrorHandlerService>('ErrorHandlerService', ['handleUncaughtError']);
    
    errorHandler = new GlobalErrorHandler(mockErrorHandlerService);
  });

  it('should be created', () => {
    expect(errorHandler).toBeTruthy();
  });

  it('should call handleUncaughtError when handleError is called', () => {
    const error = new Error('Test error');
    
    errorHandler.handleError(error);
    
    expect(mockErrorHandlerService.handleUncaughtError).toHaveBeenCalledWith(error);
  });
});