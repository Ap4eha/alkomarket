import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { ShopsComponent } from './shops/shops.component';
import { ProductsComponent } from './products/products.component';
import { CustomersComponent } from './customers/customers.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'suppliers', component: SuppliersComponent },
  { path: 'shops', component: ShopsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'customers', component: CustomersComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }