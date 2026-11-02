import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuComponent } from './menu.component';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handle menu click events', () => {
    const event = new MouseEvent('click');
    spyOn(event, 'preventDefault');
    
    component.onMenuClick(event);
    expect(event.preventDefault).toHaveBeenCalled();
  });

  it('should use design tokens in styles', () => {
    const styles = getComputedStyle(fixture.nativeElement);
    expect(styles.getPropertyValue('--color-primary')).toBeTruthy();
    expect(styles.getPropertyValue('--border-radius-md')).toBeTruthy();
  });
});