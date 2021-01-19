import { Component, OnInit } from '@angular/core';
import { SupplierContact } from '../supplier-contact';

@Component({
  selector: 'app-add-supplier-contact',
  templateUrl: './add-supplier-contact.component.html',
  styleUrls: ['./add-supplier-contact.component.css']
})
export class AddSupplierContactComponent implements OnInit {

  supplierContact: SupplierContact = new SupplierContact();
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.supplierContact);
  }

}
