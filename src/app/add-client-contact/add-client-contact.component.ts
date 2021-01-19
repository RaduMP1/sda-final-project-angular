import { Component, OnInit } from '@angular/core';
import { ClientContact } from '../client-contact';

@Component({
  selector: 'app-add-client-contact',
  templateUrl: './add-client-contact.component.html',
  styleUrls: ['./add-client-contact.component.css']
})
export class AddClientContactComponent implements OnInit {

  clientContact: ClientContact = new ClientContact();
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.clientContact);
  }

}
