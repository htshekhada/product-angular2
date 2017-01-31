import { Component } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import { Product, ProductService }  from './product/product.service';
import { SharedService } from './shared/shared.service';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/home" routerLinkActive="active">Home</a>
      <a routerLink="/product-list" routerLinkActive="active">Product List</a>
      <a routerLink="/product" routerLinkActive="active">New Product</a>
      <a routerLink="/about" routerLinkActive="active">About</a>
      Cart({{cartItems.length}})
    </nav>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent  { 
  name = 'Angular';
  cartItems: Product[] = [];
  cartItemsSubscription:Subscription;
  constructor(
    private sharedService: SharedService
  ) {}

  ngOnInit() {
    this.cartItemsSubscription = this.sharedService.cartItems$.subscribe(
      items => this.cartItems = items
    );
  }

  ngOnDestroy() {
    // prevent memory leak when component is destroyed
    this.cartItemsSubscription.unsubscribe();
  }
}
