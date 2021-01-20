import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientContact } from '../client-contact';
import { ClientContactService } from '../client-contact.service';

@Component({
  selector: 'app-client-contact',
  templateUrl: './client-contact.component.html',
  styleUrls: ['./client-contact.component.css']
})
export class ClientContactComponent implements OnInit {

  clientContacts: ClientContact[];

  constructor(private clientContactService: ClientContactService,
    private router: Router) { }

  ngOnInit(): void {
    this.getClientContacts();
  }

  private getClientContacts(){
    this.clientContactService.getClientContactsList().subscribe(data => {
      this.clientContacts = data;
    });
  }

  updateClientContact(id: number){
    this.router.navigate(['update-client-contact', id]);
  }

  deleteClientContact(id: number){
    this.clientContactService.deleteClientContact(id).subscribe( data => {
      console.log(data);
      this.getClientContacts();
    })
  }

}
