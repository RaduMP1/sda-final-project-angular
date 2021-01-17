import { Component, OnInit } from '@angular/core';
import { Sale } from '../sale'
import { SaleService } from '../sale.service'

@Component({
  selector: 'app-sales-list',
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.css']
})
export class SalesListComponent implements OnInit {

  sales: Sale[];

  constructor(private saleService: SaleService) { }

  ngOnInit(): void {
    this.getSales();
  }

  private getSales(){
    this.saleService.getSalesList().subscribe(data => {
      this.sales = data;
    });
  }

}
