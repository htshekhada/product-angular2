import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent }    from './product-list.component';
import { AddProductComponent }  from './add-product.component';

const productsRoutes: Routes = [
  { path: 'product-list',  component: ProductListComponent },
  { path: 'product', component: AddProductComponent }
];
@NgModule({
  imports: [
    RouterModule.forChild(productsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProductsRoutingModule { }