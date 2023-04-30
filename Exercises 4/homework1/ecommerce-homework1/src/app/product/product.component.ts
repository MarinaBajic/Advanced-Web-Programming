import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  product: Product;

  constructor() {}

  ngOnInit() {
    this.product = new Product("Test Product", "http://via.placeholder.com/150x150", 85, true);
  }

  increaseQuantity() {
    this.product.quantity++;
  }

  decreaseQuantity() {
    if (this.product.quantity > 0) {
      this.product.quantity--;
    }
  }

  canDecrease() {
    return this.product.quantity > 0;
  }
}
