import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sale } from '../sale';
import { SaleService } from '../sale.service';

@Component({
  selector: 'app-update-sale',
  templateUrl: './update-sale.component.html',
  styleUrls: ['./update-sale.component.css']
})
export class UpdateSaleComponent implements OnInit {

  id: number;
  sale: Sale = new Sale();
  constructor(private saleService: SaleService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.saleService.getSaleById(this.id).subscribe(data => {
      this.sale = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.saleService.updateSale(this.id, this.sale).subscribe( data => {
      this.goToSalesList();
    }
    , error => console.log(error));
  }

  goToSalesList(){
    this.router.navigate(['/sales']);
  }

}
