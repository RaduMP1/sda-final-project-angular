import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientContactComponent } from './client-contact/client-contact.component';
import { ClientsComponent } from './clients/clients.component';
import { ProductsComponent } from './products/products.component';
import { SalesListComponent } from './sales-list/sales-list.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { SupplierContactComponent } from './supplier-contact/supplier-contact.component';
import { AddSaleComponent } from './add-sale/add-sale.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddClientComponent } from './add-client/add-client.component';
import { AddClientContactComponent } from './add-client-contact/add-client-contact.component';
import { AddSupplierComponent } from './add-supplier/add-supplier.component';
import { AddSupplierContactComponent } from './add-supplier-contact/add-supplier-contact.component';
import { UpdateSaleComponent } from './update-sale/update-sale.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { UpdateClientComponent } from './update-client/update-client.component';
import { UpdateClientContactComponent } from './update-client-contact/update-client-contact.component';
import { UpdateSupplierContactComponent } from './update-supplier-contact/update-supplier-contact.component';

const routes: Routes = [
  {path: 'sales', component: SalesListComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'clients', component: ClientsComponent},
  {path: 'suppliers', component: SuppliersComponent},
  {path: 'clientcontacts', component: ClientContactComponent},
  {path: 'suppliercontacts', component: SupplierContactComponent},
  {path: 'addsale', component: AddSaleComponent},
  {path: 'addproduct', component: AddProductComponent},
  {path: 'addclient', component: AddClientComponent},
  {path: 'addclientcontact', component: AddClientContactComponent},
  {path: 'addsupplier', component: AddSupplierComponent},
  {path: 'addsuppliercontact', component: AddSupplierContactComponent},
  {path: 'update-sale/:id', component: UpdateSaleComponent},
  {path: 'update-product/:id', component: UpdateProductComponent},
  {path: 'update-client/:id', component: UpdateClientComponent},
  {path: 'update-client-contact/:id', component: UpdateClientContactComponent},
  {path: 'update-supplier-contact/:id', component: UpdateSupplierContactComponent},
  {path: '', redirectTo: 'sales', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
