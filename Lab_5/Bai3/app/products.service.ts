import { Injectable } from '@angular/core';
import { products } from './mock.products';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private _products: Array<any> = [];
  constructor() {}
  getProducts() {
    return (this._products = products);
  }
}
