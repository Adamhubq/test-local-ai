import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor() { }

  /**
   * Check if user is authenticated
   */
  isAuthenticated(): boolean {
    // Implementation would check token or session
    return false;
  }

  /**
   * Get current user
   */
  getCurrentUser(): Observable<User | null> {
    return this.currentUser$;
  }

  /**
   * Login user
   */
  login(username: string, password: string): Observable<boolean> {
    // Implementation would authenticate with API
    throw new Error('Method not implemented');
  }

  /**
   * Logout user
   */
  logout(): void {
    this.currentUserSubject.next(null);
  }
}