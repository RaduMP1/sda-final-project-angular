import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SupplierContact } from '../supplier-contact';
import { SupplierContactService } from '../supplier-contact.service';

@Component({
  selector: 'app-supplier-contact-details',
  templateUrl: './supplier-contact-details.component.html',
  styleUrls: ['./supplier-contact-details.component.css']
})
export class SupplierContactDetailsComponent implements OnInit {

  id: number
  supplierContact: SupplierContact
  constructor(private route: ActivatedRoute, private supplierContactService: SupplierContactService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.supplierContact = new SupplierContact();
    this.supplierContactService.getSupplierContactById(this.id).subscribe( data => {
      this.supplierContact = data;
    })
  }

}
