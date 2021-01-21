import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SalesListComponent } from './sales-list/sales-list.component';
import { ProductsComponent } from './products/products.component';
import { ClientsComponent } from './clients/clients.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { ClientContactComponent } from './client-contact/client-contact.component';
import { SupplierContactComponent } from './supplier-contact/supplier-contact.component';
import { AddSaleComponent } from './add-sale/add-sale.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddClientComponent } from './add-client/add-client.component';
import { AddClientContactComponent } from './add-client-contact/add-client-contact.component';
import { AddSupplierComponent } from './add-supplier/add-supplier.component';
import { AddSupplierContactComponent } from './add-supplier-contact/add-supplier-contact.component';
import { FormsModule } from '@angular/forms';
import { UpdateSaleComponent } from './update-sale/update-sale.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { UpdateClientComponent } from './update-client/update-client.component';
import { UpdateClientContactComponent } from './update-client-contact/update-client-contact.component';
import { UpdateSupplierContactComponent } from './update-supplier-contact/update-supplier-contact.component';
import { UpdateSupplierComponent } from './update-supplier/update-supplier.component';
import { SaleDetailsComponent } from './sale-details/sale-details.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { SupplierDetailsComponent } from './supplier-details/supplier-details.component';
import { ClientContactDetailsComponent } from './client-contact-details/client-contact-details.component';
import { SupplierContactDetailsComponent } from './supplier-contact-details/supplier-contact-details.component'

@NgModule({
  declarations: [
    AppComponent,
    SalesListComponent,
    ProductsComponent,
    ClientsComponent,
    SuppliersComponent,
    ClientContactComponent,
    SupplierContactComponent,
    AddSaleComponent,
    AddProductComponent,
    AddClientComponent,
    AddClientContactComponent,
    AddSupplierComponent,
    AddSupplierContactComponent,
    UpdateSaleComponent,
    UpdateProductComponent,
    UpdateClientComponent,
    UpdateClientContactComponent,
    UpdateSupplierContactComponent,
    UpdateSupplierComponent,
    SaleDetailsComponent,
    ProductDetailsComponent,
    ClientDetailsComponent,
    SupplierDetailsComponent,
    ClientContactDetailsComponent,
    SupplierContactDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
