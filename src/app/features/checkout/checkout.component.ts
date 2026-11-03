import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../../core/services/cart.service';
import { Subscription } from 'rxjs';
import { CartItem } from '../../core/services/cart.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
  imports: [CurrencyPipe]
})
export class CheckoutComponent implements OnInit, OnDestroy {
  checkoutForm: FormGroup;
  cartItems: CartItem[] = [];
  cartTotal: number = 0;
  private cartSubscription!: Subscription;

  constructor(
    private fb: FormBuilder,
    private cartService: CartService
  ) {
    this.checkoutForm = this.fb.group({
      shippingInfo: this.fb.group({
        firstName: ['', [Validators.required, Validators.minLength(2)]],
        lastName: ['', [Validators.required, Validators.minLength(2)]],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', [Validators.required]],
        address: ['', [Validators.required]],
        city: ['', [Validators.required]],
        zipCode: ['', [Validators.required]],
        country: ['', [Validators.required]]
      }),
      paymentInfo: this.fb.group({
        cardNumber: ['', [Validators.required, Validators.pattern('^[0-9]{16}$')]],
        expiryDate: ['', [Validators.required, Validators.pattern('^(0[1-9]|1[0-2])/[0-9]{2}$')]],
        cvv: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(4)]],
        cardHolderName: ['', [Validators.required]]
      }),
      orderNotes: ['']
    });
  }

  ngOnInit(): void {
    this.loadCartItems();
  }

  ngOnDestroy(): void {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }

  loadCartItems(): void {
    this.cartSubscription = this.cartService.getCartItems().subscribe(items => {
      this.cartItems = items;
      this.cartTotal = this.cartService.getCartTotal();
    });
  }

  onSubmit(): void {
    if (this.checkoutForm.valid) {
      console.log('Checkout data:', this.checkoutForm.value);
      // Here you would typically send the order to your backend
      alert('Order placed successfully!');
      this.cartService.clearCart();
      this.checkoutForm.reset();
    } else {
      this.markFormGroupAsTouched(this.checkoutForm);
    }
  }

  private markFormGroupAsTouched(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach(key => {
      const control = formGroup.get(key);
      if (control instanceof FormGroup) {
        this.markFormGroupAsTouched(control);
      } else {
        control?.markAsTouched();
      }
    });
  }

  removeItem(productId: number): void {
    this.cartService.removeFromCart(productId);
  }

  updateQuantity(productId: number, quantity: number): void {
    if (quantity >= 1) {
      this.cartService.updateQuantity(productId, quantity);
    }
  }
}