import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  client: Client = new Client();
  constructor(private clientService: ClientService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveClient(){
    this.clientService.createClient(this.client).subscribe( data => {
      console.log(data);
      this.goToClientsList();
    },
    error => console.log(error));
  }

  goToClientsList(){
    this.router.navigate(['/clients']);
  }

  onSubmit(){
    console.log(this.client);
    this.saveClient();
  }

}
