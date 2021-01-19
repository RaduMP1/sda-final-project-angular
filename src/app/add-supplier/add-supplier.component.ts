import { Component, OnInit } from '@angular/core';
import { Supplier } from '../supplier';

@Component({
  selector: 'app-add-supplier',
  templateUrl: './add-supplier.component.html',
  styleUrls: ['./add-supplier.component.css']
})
export class AddSupplierComponent implements OnInit {

  supplier: Supplier = new Supplier();
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.supplier);
  }

}
