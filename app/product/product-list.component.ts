import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Product, ProductService }  from './product.service';

@Component({
  template: `
    <h2>PRODUCTS</h2>
    <ul class="items">
      <li *ngFor="let product of products"
        [class.selected]="isSelected(product)"
        (click)="onSelect(product)">
        <span class="badge">{{ product.id }}</span> {{ product.name }}
      </li>
    </ul>
    <button routerLink="/sidekicks">Go to sidekicks</button>
  `
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  private selectedId: number;
  constructor(
    private service: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit() {
    this.service.getProducts().then(products => this.products = products);
  }
  isSelected(product: Product) { return product.id === this.selectedId; }
  onSelect(product: Product) {
    this.router.navigate(['/product', { id: product.id, foo: 'foo' }]);
  }
}