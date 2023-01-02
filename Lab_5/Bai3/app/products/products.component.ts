import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  public productList: Array<any> = [];
  constructor(private ProductService: ProductsService) {
    this.productList = this.ProductService.getProducts();
  }
  ngOnInit(): void {}
}
