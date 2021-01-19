import { Component, OnInit } from '@angular/core';
import { Sale } from '../sale';

@Component({
  selector: 'app-add-sale',
  templateUrl: './add-sale.component.html',
  styleUrls: ['./add-sale.component.css']
})
export class AddSaleComponent implements OnInit {

  sale: Sale = new Sale();
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.sale);
  }

}
