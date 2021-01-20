import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Supplier } from '../supplier';
import { SupplierService } from '../supplier.service';

@Component({
  selector: 'app-update-supplier',
  templateUrl: './update-supplier.component.html',
  styleUrls: ['./update-supplier.component.css']
})
export class UpdateSupplierComponent implements OnInit {

  id: number;
  supplier: Supplier = new Supplier();
  constructor(private supplierService: SupplierService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.supplierService.getSupplierById(this.id).subscribe(data => {
      this.supplier = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.supplierService.updateSupplier(this.id, this.supplier).subscribe( data => {
      this.goToSuppliersList();
    }
    , error => console.log(error));
  }

  goToSuppliersList(){
    this.router.navigate(['/suppliers']);
  }

}
