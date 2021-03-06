import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients: Client[];

  constructor(private clientService: ClientService,
    private router: Router) { }

  ngOnInit(): void {
    this.getClients();
  }

  private getClients(){
    this.clientService.getClientsList().subscribe(data => {
      this.clients = data;
    });
  }

  clientDetails(id: number){
    this.router.navigate(['client-details', id]);
  }

  updateClient(id: number){
    this.router.navigate(['update-client', id]);
  }

  deleteClient(id: number){
    this.clientService.deleteClient(id).subscribe( data => {
      console.log(data);
      this.getClients();
    })
  }

}
