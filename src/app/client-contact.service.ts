import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientContact } from './client-contact'

@Injectable({
  providedIn: 'root'
})
export class ClientContactService {

  private baseURL = "http://localhost:8080/api/v1/client_contacts";

  constructor(private httpClient: HttpClient) { }

  getClientContactsList(): Observable<ClientContact[]>{
    return this.httpClient.get<ClientContact[]>(`${this.baseURL}`);
  }
}
