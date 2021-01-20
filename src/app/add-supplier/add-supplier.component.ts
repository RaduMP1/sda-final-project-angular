import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Supplier } from '../supplier';
import { SupplierService } from '../supplier.service';

@Component({
  selector: 'app-add-supplier',
  templateUrl: './add-supplier.component.html',
  styleUrls: ['./add-supplier.component.css']
})
export class AddSupplierComponent implements OnInit {

  supplier: Supplier = new Supplier();
  constructor(private supplierService: SupplierService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveSupplier(){
    this.supplierService.createSupplier(this.supplier).subscribe( data => {
      console.log(data);
      this.goToSuppliersList();
    },
    error => console.log(error));
  }

  goToSuppliersList(){
    this.router.navigate(['/suppliers']);
  }

  onSubmit(){
    console.log(this.supplier);
    this.saveSupplier();
  }

}
