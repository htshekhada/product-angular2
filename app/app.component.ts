import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/home" routerLinkActive="active">Home</a>
      <a routerLink="/product-list" routerLinkActive="active">Product List</a>
      <a routerLink="/product" routerLinkActive="active">New Product</a>
      <a routerLink="/about" routerLinkActive="active">About</a>
    </nav>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent  { name = 'Angular'; }
