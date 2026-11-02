import { TestBed } from '@angular/core/testing';
import { NotificationService, NotificationType } from './notification.service';

describe('NotificationService', () => {
  let service: NotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should show notification with correct properties', () => {
    const message = 'Test message';
    const type: NotificationType = 'success';
    
    spyOn(service, 'show');
    
    service.show(message, type);
    
    expect(service.show).toHaveBeenCalledWith(message, type, undefined);
  });

  it('should have convenience methods for different notification types', () => {
    spyOn(service, 'show');
    
    service.success('Success message');
    service.error('Error message');
    service.warning('Warning message');
    service.info('Info message');
    
    expect(service.show).toHaveBeenCalledTimes(4);
  });
});