import { Component } from '@angular/core';
import { Product } from '../model/product';
import { ProductQuantityChange } from '../model/product-quantity-change';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  // Array of products
  products: Array<Product>;

  constructor(){
    // Initializing products array
    this.products = [
      new Product(1, "Test Product - 1", "http://via.placeholder.com/150x150", 85, true),
      new Product(2, "Test Product - 2", "http://via.placeholder.com/150x150", 65, false),
      new Product(3, "Test Product - 3", "http://via.placeholder.com/150x150", 99, true)
    ]
  }
  
  // Method to handle output event from product component
  onChangeQuantity(pc: ProductQuantityChange) {
    // Find product in array
    let product = this.products.find((prod) => {
      return prod.id === pc.product.id;
    });
    // If product is found, increase or decrease quantity
    if(product){
      product.quantity += pc.amountChange;
    } else {
      console.log("Something strange happenend!")
    }
    
  }
}
