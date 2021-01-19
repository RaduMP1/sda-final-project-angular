import { Component, OnInit } from '@angular/core';
import { Client } from '../client';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  client: Client = new Client();
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.client);
  }

}
