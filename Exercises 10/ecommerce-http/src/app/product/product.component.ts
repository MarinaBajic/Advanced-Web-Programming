import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductQuantityChange } from '../model/product-quantity-change';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  // Input decorator allows us to pass data from parent to child component
  @Input() product: Product;
  // Output decorator allows us to pass data from child to parent component
  // EventEmitter is used to emit custom made events
  // ProductQuantityChange is a custom made event (interface)
  @Output() changeQuantity: EventEmitter<ProductQuantityChange>;

  // Object to store classes for ngClass directive
  productClasses: {[key: string]: boolean}
  // Object to store styles for ngStyle directive
  productStyles: {[key: string]: string}

  constructor() {
    // We must initialize EventEmitter in constructor
    this.changeQuantity = new EventEmitter<ProductQuantityChange>();
  };

  ngOnInit(): void {
      // Initializing productClasses and productStyles objects
      this.productClasses = {
        "highlight": this.product.onSale,
      }
      this.productStyles = {
        "font-size": this.product.quantity >= 10 ? "1.5rem" : "1rem"
      }
  }

  // Instead of increasing quantity here, we emit an event and send necessary data to parent component
  increaseQuantity(){
    this.changeQuantity.emit({product: this.product, amountChange: 1});
  }

  // Instead of decreasing quantity here, we emit an event and send necessary data to parent component
  decreaseQuantity(){
    this.changeQuantity.emit({product: this.product, amountChange: -1});
  }
  
}
