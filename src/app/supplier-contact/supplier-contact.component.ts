import { Component, OnInit } from '@angular/core';
import { SupplierContact } from '../supplier-contact'
import { SupplierContactService } from '../supplier-contact.service'

@Component({
  selector: 'app-supplier-contact',
  templateUrl: './supplier-contact.component.html',
  styleUrls: ['./supplier-contact.component.css']
})
export class SupplierContactComponent implements OnInit {

  supplierContacts: SupplierContact[];

  constructor(private supplierContactService: SupplierContactService) { }

  ngOnInit(): void {
    this.getSupplierContacts();
  }

  private getSupplierContacts(){
    this.supplierContactService.getSupplierContactsList().subscribe(data => {
      this.supplierContacts = data;
    });
  }

}
