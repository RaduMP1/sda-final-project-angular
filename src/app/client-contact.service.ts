import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientContact } from './client-contact';

@Injectable({
  providedIn: 'root'
})
export class ClientContactService {

  private baseURL = "http://localhost:8080/api/v1/client_contacts";

  constructor(private httpClient: HttpClient) { }

  getClientContactsList(): Observable<ClientContact[]>{
    return this.httpClient.get<ClientContact[]>(`${this.baseURL}`);
  }

  createClientContact(clientContact: ClientContact): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, clientContact);
  }

  getClientContactById(id: number): Observable<ClientContact>{
    return this.httpClient.get<ClientContact>(`${this.baseURL}/${id}`);
  }

  updateClientContact(id: number, clientContact: ClientContact): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, clientContact);
  }

  deleteClientContact(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
