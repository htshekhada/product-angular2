import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Product, ProductService }  from './product.service';

//check form : https://angular.io/resources/live-examples/forms/ts/eplnkr.html
@Component({
  moduleId: module.id,
  templateUrl: 'add-product.component.html',
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