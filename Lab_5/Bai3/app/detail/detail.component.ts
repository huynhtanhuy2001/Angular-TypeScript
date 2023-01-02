import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent {
  public productList: Array<any> = [];
  id: any;
  name: any;
  constructor(
    private ProductService: ProductsService,
    private rout: ActivatedRoute
  ) {
    this.productList = this.ProductService.getProducts();
    this.id = this.rout.snapshot.queryParamMap.get('id');
    this.name = this.rout.snapshot.queryParamMap.get('name');
  }
  ngOnInit(): void {}
}
