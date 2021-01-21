import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sale } from '../sale';
import { SaleService } from '../sale.service';

@Component({
  selector: 'app-sale-details',
  templateUrl: './sale-details.component.html',
  styleUrls: ['./sale-details.component.css']
})
export class SaleDetailsComponent implements OnInit {

  id: number
  sale: Sale
  constructor(private route: ActivatedRoute, private saleService: SaleService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.sale = new Sale();
    this.saleService.getSaleById(this.id).subscribe( data => {
      this.sale = data;
    })
  }

}
