import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { NavigationService } from './navigation.service';

describe('NavigationService', () => {
  let service: NavigationService;
  let mockRouter: any;

  beforeEach(() => {
    mockRouter = {
      navigate: jasmine.createSpy('navigate')
    };

    TestBed.configureTestingModule({
      providers: [
        NavigationService,
        { provide: Router, useValue: mockRouter }
      ]
    });
    
    service = TestBed.inject(NavigationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should navigate to route', () => {
    service.navigateTo('/catalog').subscribe(result => {
      expect(result).toBe(true);
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/catalog']);
    });
  });

  it('should navigate to product', () => {
    service.navigateToProduct(123).subscribe(result => {
      expect(result).toBe(true);
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/product/123']);
    });
  });

  it('should navigate to category', () => {
    service.navigateToCategory('electronics').subscribe(result => {
      expect(result).toBe(true);
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/category/electronics']);
    });
  });

  it('should navigate to brand', () => {
    service.navigateToBrand('apple').subscribe(result => {
      expect(result).toBe(true);
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/brand/apple']);
    });
  });

  it('should go back', () => {
    spyOn(window.history, 'back');
    service.goBack().subscribe(result => {
      expect(result).toBe(true);
      expect(window.history.back).toHaveBeenCalled();
    });
  });

  it('should go to cart', () => {
    service.goToCart().subscribe(result => {
      expect(result).toBe(true);
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/cart']);
    });
  });
});