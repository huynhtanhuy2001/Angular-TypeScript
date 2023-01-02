import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent {
  public productList: Array<any> = [];
  constructor(private ProductService: ProductsService) {
    this.productList = this.ProductService.getProducts();
  }
  ngOnInit(): void {}
}
