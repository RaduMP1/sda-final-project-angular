import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sale } from './sale';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  private baseURL = "http://localhost:8080/api/v1/sales";

  constructor(private httpClient: HttpClient) { }

  getSalesList(): Observable<Sale[]>{
    return this.httpClient.get<Sale[]>(`${this.baseURL}`);
  }

  createSale(sale: Sale): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, sale);
  }

  getSaleById(id: number): Observable<Sale>{
    return this.httpClient.get<Sale>(`${this.baseURL}/${id}`);
  }

  updateSale(id: number, sale: Sale): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, sale);
  }

  deleteSale(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
  
}
