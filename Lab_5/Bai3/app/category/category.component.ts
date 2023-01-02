import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent {
  public productList: Array<any> = [];

  constructor(private ProductService: ProductsService) {
    this.productList = this.ProductService.getProducts();
  }
  ngOnInit(): void {}
}
