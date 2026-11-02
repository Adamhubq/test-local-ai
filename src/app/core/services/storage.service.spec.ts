import { TestBed } from '@angular/core/testing';
import { StorageService } from './storage.service';

describe('StorageService', () => {
  let service: StorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should handle get with non-existent key', () => {
    const result = service.get('non_existent_key');
    expect(result).toBeNull();
  });

  it('should handle set and get operations', () => {
    const testData = { name: 'test', value: 123 };
    const setResult = service.set('test_key', testData);
    const getResult = service.get<{name: string, value: number}>('test_key');
    
    expect(setResult).toBeTrue();
    expect(getResult).toEqual(testData);
  });

  it('should handle remove operation', () => {
    const testData = { name: 'test', value: 123 };
    service.set('remove_test_key', testData);
    const getResultBefore = service.get('remove_test_key');
    
    expect(getResultBefore).toEqual(testData);
    
    const removeResult = service.remove('remove_test_key');
    const getResultAfter = service.get('remove_test_key');
    
    expect(removeResult).toBeTrue();
    expect(getResultAfter).toBeNull();
  });

  it('should handle clear operation', () => {
    service.set('clear_test_1', { test: 'data1' });
    service.set('clear_test_2', { test: 'data2' });
    
    const result1 = service.get('clear_test_1');
    const result2 = service.get('clear_test_2');
    
    expect(result1).toEqual({ test: 'data1' });
    expect(result2).toEqual({ test: 'data2' });
    
    service.clear();
    
    const afterClear1 = service.get('clear_test_1');
    const afterClear2 = service.get('clear_test_2');
    
    expect(afterClear1).toBeNull();
    expect(afterClear2).toBeNull();
  });

  it('should handle invalid JSON gracefully', () => {
    // Set raw string data that's not valid JSON
    localStorage.setItem('NOVA_STORE_invalid_json_test', 'not_valid_json');
    
    const result = service.get('invalid_json_test');
    expect(result).toBeNull();
  });
});