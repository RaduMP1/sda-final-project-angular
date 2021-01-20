import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SupplierContact } from '../supplier-contact';
import { SupplierContactService } from '../supplier-contact.service';

@Component({
  selector: 'app-add-supplier-contact',
  templateUrl: './add-supplier-contact.component.html',
  styleUrls: ['./add-supplier-contact.component.css']
})
export class AddSupplierContactComponent implements OnInit {

  supplierContact: SupplierContact = new SupplierContact();
  constructor(private supplierContactService: SupplierContactService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveSupplierContact(){
    this.supplierContactService.createSupplierContact(this.supplierContact).subscribe( data => {
      console.log(data);
      this.goToSupplierContactsList();
    },
    error => console.log(error));
  }

  goToSupplierContactsList(){
    this.router.navigate(['/suppliercontacts']);
  }

  onSubmit(){
    console.log(this.supplierContact);
    this.saveSupplierContact();
  }

}
