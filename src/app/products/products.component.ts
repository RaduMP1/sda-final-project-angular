import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[];

  constructor(private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts(){
    this.productService.getProductsList().subscribe(data => {
      this.products = data;
    });
  }

  productDetails(id: number){
    this.router.navigate(['product-details', id]);
  }

  updateProduct(id: number){
    this.router.navigate(['update-product', id]);
  }

  deleteProduct(id: number){
    this.productService.deleteProduct(id).subscribe( data => {
      console.log(data);
      this.getProducts();
    })
  }

}
