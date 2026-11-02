import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductCardComponent } from './product-card.component';
import { Product } from '../../../models/product.model';

describe('ProductCardComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;

  const mockProduct: Product = {
    id: 1,
    name: 'Test Product',
    description: 'Test Description',
    price: 29.99,
    category: 'Test Category',
    images: [],
    sizes: ['S', 'M', 'L'],
    colors: ['Red', 'Blue']
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;
    component.product = mockProduct;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display product name', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.product-name').textContent).toContain('Test Product');
  });

  it('should display product price', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.product-price').textContent).toContain('$29.99');
  });

  it('should call addToCart when button is clicked', () => {
    spyOn(component, 'addToCart');
    const compiled = fixture.nativeElement;
    const button = compiled.querySelector('.add-to-cart-btn');
    button.click();
    expect(component.addToCart).toHaveBeenCalled();
  });

  it('should handle keyboard events properly', () => {
    const event = new KeyboardEvent('keydown', { key: 'Enter' });
    spyOn(component, 'addToCart');
    
    const compiled = fixture.nativeElement;
    const button = compiled.querySelector('.add-to-cart-btn');
    button.dispatchEvent(event);
    
    expect(component.addToCart).toHaveBeenCalled();
  });

  it('should use design tokens in styles', () => {
    const styles = getComputedStyle(fixture.nativeElement);
    expect(styles.getPropertyValue('--color-accent')).toBeTruthy();
    expect(styles.getPropertyValue('--border-radius-md')).toBeTruthy();
  });
});