import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { DetailComponent } from './detail/detail.component';
import { NewComponent } from './new/new.component';
import { OrderComponent } from './order/order.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'products' },
  {
    path: 'products',
    component: ProductsComponent,
    children: [{ path: 'new', component: NewComponent }],
  },
  { path: 'products/:detail/:id', component: DetailComponent },
  {
    path: 'category',
    component: CategoryComponent,
    children: [{ path: 'new', component: NewComponent }],
  },
  { path: 'order', component: OrderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
