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

@NgModule({
  declarations: [
    AppComponent,
    SalesListComponent,
    ProductsComponent,
    ClientsComponent,
    SuppliersComponent,
    ClientContactComponent,
    SupplierContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
