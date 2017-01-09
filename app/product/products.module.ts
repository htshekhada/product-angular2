import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { ProductListComponent }    from './product-list.component';
import { AddProductComponent }  from './add-product.component';
import { ProductService } from './product.service';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProductsRoutingModule
  ],
  declarations: [
    ProductListComponent,
    AddProductComponent
  ],
  providers: [
    ProductService
  ]
})

export class ProductsModule {}