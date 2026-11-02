import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  
  constructor(private router: Router) { }

  /**
   * Navigate to a specific route
   * @param route - The route path to navigate to
   * @param params - Optional route parameters
   */
  navigateTo(route: string, params?: any): Observable<boolean> {
    if (!route) {
      console.error('NavigationService: Route is required');
      return from(Promise.resolve(false));
    }

    try {
      if (params) {
        return from(this.router.navigate([route], { queryParams: params }));
      }
      return from(this.router.navigate([route]));
    } catch (error) {
      console.error('NavigationService: Navigation failed', error);
      return from(Promise.resolve(false));
    }
  }

  /**
   * Navigate to a product detail page
   * @param productId - The product ID
   * @param slug - The product slug (optional)
   */
  navigateToProduct(productId: number, slug?: string): Observable<boolean> {
    if (!productId) {
      console.error('NavigationService: Product ID is required');
      return from(Promise.resolve(false));
    }

    try {
      const route = slug ? `/product/${slug}` : `/product/${productId}`;
      return from(this.router.navigate([route]));
    } catch (error) {
      console.error('NavigationService: Navigation to product failed', error);
      return from(Promise.resolve(false));
    }
  }

  /**
   * Navigate to a category page
   * @param slug - The category slug
   */
  navigateToCategory(slug: string): Observable<boolean> {
    if (!slug) {
      console.error('NavigationService: Category slug is required');
      return from(Promise.resolve(false));
    }

    try {
      const route = `/category/${slug}`;
      return from(this.router.navigate([route]));
    } catch (error) {
      console.error('NavigationService: Navigation to category failed', error);
      return from(Promise.resolve(false));
    }
  }

  /**
   * Navigate to a brand page
   * @param slug - The brand slug
   */
  navigateToBrand(slug: string): Observable<boolean> {
    if (!slug) {
      console.error('NavigationService: Brand slug is required');
      return from(Promise.resolve(false));
    }

    try {
      const route = `/brand/${slug}`;
      return from(this.router.navigate([route]));
    } catch (error) {
      console.error('NavigationService: Navigation to brand failed', error);
      return from(Promise.resolve(false));
    }
  }

  /**
   * Navigate back in browser history
   */
  goBack(): Observable<boolean> {
    try {
      window.history.back();
      return from(Promise.resolve(true));
    } catch (error) {
      console.error('NavigationService: Go back failed', error);
      return from(Promise.resolve(false));
    }
  }

  /**
   * Navigate to the catalog page
   */
  goToCatalog(): Observable<boolean> {
    try {
      return from(this.router.navigate(['/catalog']));
    } catch (error) {
      console.error('NavigationService: Navigation to catalog failed', error);
      return from(Promise.resolve(false));
    }
  }

  /**
   * Navigate to the cart page
   */
  goToCart(): Observable<boolean> {
    try {
      return from(this.router.navigate(['/cart']));
    } catch (error) {
      console.error('NavigationService: Navigation to cart failed', error);
      return from(Promise.resolve(false));
    }
  }

  /**
   * Navigate to the home page
   */
  goToHome(): Observable<boolean> {
    try {
      return from(this.router.navigate(['/']));
    } catch (error) {
      console.error('NavigationService: Navigation to home failed', error);
      return from(Promise.resolve(false));
    }
  }
}