import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductQuantityChange } from '../model/product-quantity-change';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

  // Array of products
  products: Array<Product>;

  constructor(private productService: ProductService){}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }
  
  // Method to handle output event from product component
  onChangeQuantity(pc: ProductQuantityChange) {
    this.productService.changeQuantity(pc.product.id, pc.amountChange);
  }
}
