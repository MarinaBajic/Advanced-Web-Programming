import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductQuantityChange } from '../model/product-quantity-change';
import { ProductService } from '../services/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

  // Array of products
  products: Observable<Product[]>;

  constructor(private productService: ProductService){}

  ngOnInit(): void {
    // this.productService.getProducts().subscribe(
    //   products => {
    //     this.products = products;
    //   }
    // );
    this.products = this.productService.getProductListObservable();
  }
  
  // Method to handle output event from product component
  onChangeQuantity(pc: ProductQuantityChange) {
    this.productService.changeQuantity(pc.product.id, pc.amountChange).subscribe({
      next: (msg) => {
        console.log(msg);
        this.productService.reloadProducts();
      },
      error: (msg) => {
        console.log(msg);
      }
    })
  }
}
