import { Component, OnInit } from '@angular/core';
import { Supplier } from '../supplier'
import { SupplierService } from '../supplier.service'

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit {

  suppliers: Supplier[];

  constructor(private supplierService: SupplierService) { }

  ngOnInit(): void {
    this.getSuppliers();
  }

  private getSuppliers(){
    this.supplierService.getSuppliersList().subscribe(data => {
      this.suppliers = data;
    });
  }

}
