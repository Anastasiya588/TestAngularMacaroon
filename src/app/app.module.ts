import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {ProductsService} from "./services/products.service";
import { AdvantagesComponent } from './components/advantages/advantages.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { BackgroundDirective } from './directives/background.directive';
import { CustomCurrencyPipe } from './pipes/custom-currency.pipe';
import { CutTextPipe } from './pipes/cut-text.pipe';
import { PhoneNumberPipe } from './pipes/phone-number.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AdvantagesComponent,
    ProductCardComponent,
    BackgroundDirective,
    CustomCurrencyPipe,
    CutTextPipe,
    PhoneNumberPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
