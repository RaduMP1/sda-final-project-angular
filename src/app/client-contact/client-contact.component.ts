import { Component, OnInit } from '@angular/core';
import { ClientContact } from '../client-contact'
import { ClientContactService } from '../client-contact.service'

@Component({
  selector: 'app-client-contact',
  templateUrl: './client-contact.component.html',
  styleUrls: ['./client-contact.component.css']
})
export class ClientContactComponent implements OnInit {

  clientContacts: ClientContact[];

  constructor(private clientContactService: ClientContactService) { }

  ngOnInit(): void {
    this.getClientContacts();
  }

  private getClientContacts(){
    this.clientContactService.getClientContactsList().subscribe(data => {
      this.clientContacts = data;
    });
  }

}
