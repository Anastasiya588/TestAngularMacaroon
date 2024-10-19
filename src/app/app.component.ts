import {Component} from '@angular/core';
import {AdvantageType} from "./types/Advantage.type";
import {FoodCardType} from "./types/Food-card.type";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showPresent: boolean = true;
  headerPhoneNumber: string = '+375 (29) 368-98-68';
  footerInstagramLink: string = 'https://www.instagram.com/';

  public advantages: AdvantageType[] = [
    {
      title: 'Лучшие продукты',
      text: 'Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты, ароматизаторы и красители.'
    },
    {
      title: 'Много вкусов',
      text: 'Наша задача – предоставить вам широкое разнобразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок.'
    },
    {
      title: 'Бисквитное тесто',
      text: 'Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей!'
    },
    {
      title: 'Честный продукт',
      text: 'Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы получили 22.06.2016 г.'
    },
  ];

  public foodCards: FoodCardType[] = [
    {
      image: '1.png',
      title: 'Макарун с малиной',
      number: '1 шт.',
      price: '1,70 руб.',
    },
    {
      image: '2.png',
      title: 'Макарун с манго',
      number: '1 шт.',
      price: '1,70 руб.',
    },
    {
      image: '3.png',
      title: 'Пирог с ванилью',
      number: '1 шт.',
      price: '1,70 руб.',
    },
    {
      image: '4.png',
      title: 'Пирог с фисташками',
      number: '1 шт.',
      price: '1,70 руб.',
    },
  ];

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
