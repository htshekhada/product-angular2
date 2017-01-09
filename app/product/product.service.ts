import { Injectable } from '@angular/core';

export class Product {
  constructor(public id: number, public code: string, public name: string, public description: string, public category: number, public subCategory: number, public rate: number, public active: boolean) { }
}

let PRODUCTS = [
  new Product(1, 'prd001', 'Medium t-shirt', 'A Medium t-shirt', 1, 101, 10, true),
  new Product(2, 'prd001', 'Medium trouser', 'A Medium trouser', 1, 102, 20, true),
  new Product(3, 'prd003', 'Keyboard', 'keyboard for desktop PC', 2, 103, 30, true),
  new Product(4, 'prd004', 'Mouse', 'mouse for desktop PC', 2, 103, 30, true)
];

let productsPromise = Promise.resolve(PRODUCTS);

@Injectable()
export class ProductService {
  getProducts() { return productsPromise; }
  getProduct(id: number | string) {
    return productsPromise
      .then(products => products.find(product => product.id === +id));
  }
}