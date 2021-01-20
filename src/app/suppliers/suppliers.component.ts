import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Supplier } from '../supplier';
import { SupplierService } from '../supplier.service';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit {

  suppliers: Supplier[];

  constructor(private supplierService: SupplierService,
    private router: Router) { }

  ngOnInit(): void {
    this.getSuppliers();
  }

  private getSuppliers(){
    this.supplierService.getSuppliersList().subscribe(data => {
      this.suppliers = data;
    });
  }

  updateSupplier(id: number){
    this.router.navigate(['update-supplier', id]);
  }

}
