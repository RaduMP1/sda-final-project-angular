import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SupplierContact } from '../supplier-contact';
import { SupplierContactService } from '../supplier-contact.service';

@Component({
  selector: 'app-supplier-contact',
  templateUrl: './supplier-contact.component.html',
  styleUrls: ['./supplier-contact.component.css']
})
export class SupplierContactComponent implements OnInit {

  supplierContacts: SupplierContact[];

  constructor(private supplierContactService: SupplierContactService,
    private router: Router) { }

  ngOnInit(): void {
    this.getSupplierContacts();
  }

  private getSupplierContacts(){
    this.supplierContactService.getSupplierContactsList().subscribe(data => {
      this.supplierContacts = data;
    });
  }

  supplierContactDetails(id: number){
    this.router.navigate(['supplier-contact-details', id]);
  }

  updateSupplierContact(id: number){
    this.router.navigate(['update-supplier-contact', id]);
  }

  deleteSupplierContact(id: number){
    this.supplierContactService.deleteSupplierContact(id).subscribe( data => {
      console.log(data);
      this.getSupplierContacts();
    })
  }

}
