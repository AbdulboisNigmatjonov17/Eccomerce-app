import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Cart } from '../models/cart';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private http = inject(HttpClient)
  private apiUrl = environment.apiUrl

  getCart(): Observable<Cart[]> {
    return this.http.get<Cart[]>(`${this.apiUrl}/cart`)
  }

  addToCart(cart: Omit<Cart, 'id'>): Observable<Cart> {
    return this.http.post<Cart>(`${this.apiUrl}/cart`, cart)
  }

  removeFromCart(cartId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/cart/${cartId}`)
  }

  updateQuantity(cartId: string, quantity: number): Observable<Cart> {
    return this.http.patch<Cart>(`${this.apiUrl}/cart/${cartId}`, { quantity })
  }
}
