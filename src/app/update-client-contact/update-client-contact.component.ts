import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientContact } from '../client-contact';
import { ClientContactService } from '../client-contact.service';

@Component({
  selector: 'app-update-client-contact',
  templateUrl: './update-client-contact.component.html',
  styleUrls: ['./update-client-contact.component.css']
})
export class UpdateClientContactComponent implements OnInit {

  id: number;
  clientContact: ClientContact = new ClientContact();
  constructor(private clientContactService: ClientContactService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.clientContactService.getClientContactById(this.id).subscribe(data => {
      this.clientContact = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.clientContactService.updateClientContact(this.id, this.clientContact).subscribe( data => {
      this.goToClientContactsList();
    }
    , error => console.log(error));
  }

  goToClientContactsList(){
    this.router.navigate(['/clientcontacts']);
  }

}
