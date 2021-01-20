import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientContact } from '../client-contact';
import { ClientContactService } from '../client-contact.service';

@Component({
  selector: 'app-add-client-contact',
  templateUrl: './add-client-contact.component.html',
  styleUrls: ['./add-client-contact.component.css']
})
export class AddClientContactComponent implements OnInit {

  clientContact: ClientContact = new ClientContact();
  constructor(private clientContactService: ClientContactService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveClientContact(){
    this.clientContactService.createClientContact(this.clientContact).subscribe( data => {
      console.log(data);
      this.goToClientContactsList();
    },
    error => console.log(error));
  }

  goToClientContactsList(){
    this.router.navigate(['/clientcontacts']);
  }

  onSubmit(){
    console.log(this.clientContact);
    this.saveClientContact();
  }

}
