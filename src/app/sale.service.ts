import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
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
}
