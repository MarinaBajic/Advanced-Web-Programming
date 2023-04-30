import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductQuantityChange } from '../model/product-quantity-change';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  @Input() product: Product;
  @Output() changeQuantity: EventEmitter<ProductQuantityChange>;
  productClasses: {[key: string]: boolean}
  productStyles: {[key: string]: string}

  constructor() {
    this.changeQuantity = new EventEmitter<ProductQuantityChange>();
  };

  ngOnInit(): void {
      this.productClasses = {
        "highlight": this.product.onSale,
      }
      this.productStyles = {
        "font-size": this.product.quantity >= 10 ? "1.5rem" : "1rem"
      }
  }

  increaseQuantity(){
    this.changeQuantity.emit({product: this.product, amountChange: 1});
  }

  decreaseQuantity(){
    this.changeQuantity.emit({product: this.product, amountChange: -1});
  }
  
}
