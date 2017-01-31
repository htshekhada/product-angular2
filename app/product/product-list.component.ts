import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Product, ProductService }  from './product.service';
import { SharedService } from '../shared/shared.service';

@Component({
  template: `
    <h2>PRODUCTS</h2>
    <ul class="items">
      <li *ngFor="let product of products"
        [class.selected]="isSelected(product)">
        <span class="badge">{{ product.id }}</span> {{ product.name }}
        <button (click)="onSelect(product)">Edit</button>
        <button (click)="addToCart(product)">Add</button>
      </li>
    </ul>
    <button routerLink="/sidekicks">Go to sidekicks</button>
  `
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  private selectedId: number;
  constructor(
    private productService: ProductService,
    private sharedService: SharedService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit() {
    this.productService.getProducts().then(products => this.products = products);
  }
  isSelected(product: Product) { return product.id === this.selectedId; }
  onSelect(product: Product) {
    this.router.navigate(['/product', { id: product.id, foo: 'foo' }]);
  }
  addToCart(product: Product) {
    this.sharedService.addItemToCart(product);
  }
}