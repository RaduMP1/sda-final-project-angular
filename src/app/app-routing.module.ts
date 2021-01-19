import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientContactComponent } from './client-contact/client-contact.component';
import { ClientsComponent } from './clients/clients.component';
import { ProductsComponent } from './products/products.component';
import { SalesListComponent } from './sales-list/sales-list.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { SupplierContactComponent } from './supplier-contact/supplier-contact.component'

const routes: Routes = [
  {path: 'sales', component: SalesListComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'clients', component: ClientsComponent},
  {path: 'suppliers', component: SuppliersComponent},
  {path: 'clientcontacts', component: ClientContactComponent},
  {path: 'suppliercontacts', component: SupplierContactComponent},
  {path: '', redirectTo: 'sales', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
