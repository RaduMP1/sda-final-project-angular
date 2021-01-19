import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SupplierContact } from './supplier-contact'

@Injectable({
  providedIn: 'root'
})
export class SupplierContactService {

  private baseURL = "http://localhost:8080/api/v1/supplier_contacts"

  constructor(private httpClient: HttpClient) { }

  getSupplierContactsList(): Observable<SupplierContact[]>{
    return this.httpClient.get<SupplierContact[]>(`${this.baseURL}`);
  }
}
