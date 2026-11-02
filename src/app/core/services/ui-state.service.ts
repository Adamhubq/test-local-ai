import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface UiState {
  isMobileMenuOpen: boolean;
  openedOverlays: string[];
  isGlobalLoading: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UiStateService {
  private uiStateSubject = new BehaviorSubject<UiState>({
    isMobileMenuOpen: false,
    openedOverlays: [],
    isGlobalLoading: false
  });

  public uiState$ = this.uiStateSubject.asObservable();

  constructor() { }

  /**
   * Toggle mobile menu state
   */
  toggleMobileMenu(): void {
    const currentState = this.uiStateSubject.value;
    this.uiStateSubject.next({
      ...currentState,
      isMobileMenuOpen: !currentState.isMobileMenuOpen
    });
  }

  /**
   * Open mobile menu
   */
  openMobileMenu(): void {
    const currentState = this.uiStateSubject.value;
    this.uiStateSubject.next({
      ...currentState,
      isMobileMenuOpen: true
    });
  }

  /**
   * Close mobile menu
   */
  closeMobileMenu(): void {
    const currentState = this.uiStateSubject.value;
    this.uiStateSubject.next({
      ...currentState,
      isMobileMenuOpen: false
    });
  }

  /**
   * Open overlay element
   */
  openOverlay(overlayId: string): void {
    const currentState = this.uiStateSubject.value;
    if (!currentState.openedOverlays.includes(overlayId)) {
      this.uiStateSubject.next({
        ...currentState,
        openedOverlays: [...currentState.openedOverlays, overlayId]
      });
    }
  }

  /**
   * Close overlay element
   */
  closeOverlay(overlayId: string): void {
    const currentState = this.uiStateSubject.value;
    const updatedOverlays = currentState.openedOverlays.filter(id => id !== overlayId);
    this.uiStateSubject.next({
      ...currentState,
      openedOverlays: updatedOverlays
    });
  }

  /**
   * Close all overlays
   */
  closeAllOverlays(): void {
    const currentState = this.uiStateSubject.value;
    this.uiStateSubject.next({
      ...currentState,
      openedOverlays: []
    });
  }

  /**
   * Set global loading state
   */
  setGlobalLoading(isLoading: boolean): void {
    const currentState = this.uiStateSubject.value;
    this.uiStateSubject.next({
      ...currentState,
      isGlobalLoading: isLoading
    });
  }

  /**
   * Get current UI state
   */
  getCurrentState(): UiState {
    return this.uiStateSubject.value;
  }
}