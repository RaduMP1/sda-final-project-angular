import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product: Product = new Product();
  constructor(private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveProduct(){
    this.productService.createProduct(this.product).subscribe( data => {
      console.log(data);
      this.goToProductsList();
    },
    error => console.log(error));
  }

  goToProductsList(){
    this.router.navigate(['/products']);
  }

  onSubmit(){
    console.log(this.product);
    this.saveProduct();
  }

}
