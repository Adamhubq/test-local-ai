import { TestBed } from '@angular/core/testing';
import { EnvironmentService } from './environment.service';

describe('EnvironmentService', () => {
  let service: EnvironmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnvironmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have correct environment configuration', () => {
    expect(service.config.production).toBeFalse();
    expect(service.config.mockMode).toBeTrue();
    expect(service.config.apiUrl).toContain('localhost');
  });
});