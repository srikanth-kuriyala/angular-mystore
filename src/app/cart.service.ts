import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];
  constructor(
    private http: HttpClient
  ) { }

  // Add product to cart
  addToCart(product) {
    this.items.push(product);
  }

  // Get the products in cart
  getItems() {
    return this.items;
  }

  // Clear the products in cart
  clearCart() {
    this.items = [];
    return this.items;
  }

  // Get shipping prices
  getShippingPrices() {
    return this.http.get("/assets/shipping.json");
  }
}
