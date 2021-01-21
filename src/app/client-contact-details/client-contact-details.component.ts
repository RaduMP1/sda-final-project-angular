import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientContact } from '../client-contact';
import { ClientContactService } from '../client-contact.service';

@Component({
  selector: 'app-client-contact-details',
  templateUrl: './client-contact-details.component.html',
  styleUrls: ['./client-contact-details.component.css']
})
export class ClientContactDetailsComponent implements OnInit {

  id: number
  clientContact: ClientContact
  constructor(private route: ActivatedRoute, private clientContactService: ClientContactService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.clientContact = new ClientContact();
    this.clientContactService.getClientContactById(this.id).subscribe( data => {
      this.clientContact = data;
    })
  }

}
