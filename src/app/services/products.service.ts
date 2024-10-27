import {Injectable} from '@angular/core';
import {FoodCardType} from "../types/Food-card.type";

@Injectable()
export class ProductsService {
  constructor() {
  }

  getProducts(): FoodCardType[] {
    return [
      {
        image: '1.png',
        title: 'Макарун с малиной',
        number: '1 шт.',
        price: 1.70,
      },
      {
        image: '2.png',
        title: 'Макарун с манго',
        number: '1 шт.',
        price: 1.70,
      },
      {
        image: '3.png',
        title: 'Пирог с ванилью',
        number: '1 шт.',
        price: 1.70,
      },
      {
        image: '4.png',
        title: 'Пирог с фисташками',
        number: '1 шт.',
        price: 1.70,
      },
    ];
  }
}
