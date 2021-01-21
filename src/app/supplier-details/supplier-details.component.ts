import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Supplier } from '../supplier';
import { SupplierService } from '../supplier.service';

@Component({
  selector: 'app-supplier-details',
  templateUrl: './supplier-details.component.html',
  styleUrls: ['./supplier-details.component.css']
})
export class SupplierDetailsComponent implements OnInit {

  id: number
  supplier: Supplier
  constructor(private route: ActivatedRoute, private supplierService: SupplierService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.supplier = new Supplier();
    this.supplierService.getSupplierById(this.id).subscribe( data => {
      this.supplier = data;
    })
  }

}
