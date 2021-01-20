import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sale } from '../sale';
import { SaleService } from '../sale.service'

@Component({
  selector: 'app-sales-list',
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.css']
})
export class SalesListComponent implements OnInit {

  sales: Sale[];

  constructor(private saleService: SaleService,
    private router: Router) { }

  ngOnInit(): void {
    this.getSales();
  }

  private getSales(){
    this.saleService.getSalesList().subscribe(data => {
      this.sales = data;
    });
  }

  updateSale(id: number){
    this.router.navigate(['update-sale', id]);
  }

  deleteSale(id: number){
    this.saleService.deleteSale(id).subscribe( data => {
      console.log(data);
      this.getSales();
    })
  }

}
