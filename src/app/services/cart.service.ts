import {Injectable} from '@angular/core';
import {FoodCardType} from "../types/Food-card.type";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public count: number = 0;
  public totalPrice: number = 0;

  constructor() {
  }
  addToCart(price: number) {
    this.count++;
    this.totalPrice += price;
  }
  getCount(): number {
    return this.count;
  }

  getTotalPrice(): number {
    return this.totalPrice;
  }
}
