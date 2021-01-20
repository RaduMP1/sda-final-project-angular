import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sale } from '../sale';
import { SaleService } from '../sale.service';

@Component({
  selector: 'app-add-sale',
  templateUrl: './add-sale.component.html',
  styleUrls: ['./add-sale.component.css']
})
export class AddSaleComponent implements OnInit {

  sale: Sale = new Sale();
  constructor(private saleService: SaleService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveSale(){
    this.saleService.createSale(this.sale).subscribe( data => {
      console.log(data);
      this.goToSalesList();
    },
    error => console.log(error));
  }

  goToSalesList(){
    this.router.navigate(['/sales']);
  }

  onSubmit(){
    console.log(this.sale);
    this.saveSale();
  }

}
