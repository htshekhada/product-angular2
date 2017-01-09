import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Product, ProductService }  from './product.service';

@Component({
  template: `
  <h2>HEROES</h2>
  <div *ngIf="product">
    <h3>"{{ product.name }}"</h3>
    <div>
      <label>Id: </label>{{ product.id }}</div>
    <div>
      <label>Name: </label>
      <input [(ngModel)]="product.name" placeholder="name"/>
    </div>
    <p>
      <button (click)="gotoHeroes()">Back</button>
    </p>
  </div>
  `,
//  animations: [ slideInDownAnimation ]
})
export class AddProductComponent implements OnInit {
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';
  product: Product;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ProductService
  ) {}

  ngOnInit() {
    this.route.params
      // (+) converts string 'id' to a number
      .switchMap((params: Params) => this.service.getProduct(+params['id']))
      .subscribe((product: Product) => this.product = product);
  }

  gotoHeroes() {
    let productId = this.product ? this.product.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    // Include a junk 'foo' property for fun.
    this.router.navigate(['/product-list', { id: productId, foo: 'foo' }]);
  }
}