import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }     from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HomeComponent} from './home/home.component';
import { ProductsModule }     from './product/products.module';
import { SharedService } from './shared/shared.service';

import { PageNotFoundComponent } from './not-found.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ProductsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  providers: [
    SharedService
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }