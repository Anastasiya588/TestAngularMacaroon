import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {FoodCardType} from "../../types/Food-card.type";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product: FoodCardType;
  @Output() productAdded = new EventEmitter<string>();

  constructor(private cartService: CartService) {
    this.product = {
      image: '',
      title: '',
      number: '',
      price: 0,
    }
  }

  ngOnInit(): void {
  }

  public addToCart(): void {
    this.cartService.addToCart(this.product.price);
    this.productAdded.emit(this.product.title);
  }

}
