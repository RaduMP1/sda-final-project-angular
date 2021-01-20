import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SupplierContact } from '../supplier-contact';
import { SupplierContactService } from '../supplier-contact.service';

@Component({
  selector: 'app-update-supplier-contact',
  templateUrl: './update-supplier-contact.component.html',
  styleUrls: ['./update-supplier-contact.component.css']
})
export class UpdateSupplierContactComponent implements OnInit {

  id: number;
  supplierContact: SupplierContact = new SupplierContact();
  constructor(private supplierContactService: SupplierContactService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.supplierContactService.getSupplierContactById(this.id).subscribe(data => {
      this.supplierContact = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.supplierContactService.updateSupplierContact(this.id, this.supplierContact).subscribe( data => {
      this.goToSupplierContactsList();
    }
    , error => console.log(error));
  }

  goToSupplierContactsList(){
    this.router.navigate(['/suppliercontacts']);
  }

}
