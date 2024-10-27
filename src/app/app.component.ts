import {Component, OnInit} from '@angular/core';
import {FoodCardType} from "./types/Food-card.type";
import {ProductsService} from "./services/products.service";
import {CartService} from "./services/cart.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showPresent: boolean = true;
  headerPhoneNumber: string = '375293689868';
  footerInstagramLink: string = 'https://www.instagram.com/';

  public foodCards: FoodCardType[] = [];

  constructor(private productService: ProductsService, public cartService: CartService) {

  }

  ngOnInit() {
    this.foodCards = this.productService.getProducts();
  }

  productAdded(productTitle: string): void {
    alert(productTitle + ' добавлен в корзину!');
  }

  public formValues = {
    foodCardTitle: '',
    name: '',
    phone: '',
  }

  public addToCart(foodCard: FoodCardType, target: HTMLElement): void {
    this.scrollTo(target)
    this.formValues.foodCardTitle = (foodCard.title).toUpperCase();
  }

  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: "smooth"})
  };
}
