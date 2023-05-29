import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[];

  constructor() {
    this.products = [
      new Product(1, "Test Product - 1", "http://via.placeholder.com/150x150", 85, true),
      new Product(2, "Test Product - 2", "http://via.placeholder.com/150x150", 65, false),
      new Product(3, "Test Product - 3", "http://via.placeholder.com/150x150", 99, true)
    ];
  }

  getProducts(): Product[] {
    return this.products;
  }

  addProduct(product: Product) {
    let productClone: Product = Object.assign({}, product);
    productClone.id = this.products.length + 1;
    productClone.quantity = 0;
    this.products.push(productClone);
    console.log(this.products);
  }

  changeQuantity(id: number, amountChange: number) {
    let p = this.products.find((prod) => {
      return prod.id === id;
    });
    if(!p){
      console.log("Product with given id does not exists");
    } else {
      p.quantity += amountChange;
      console.log(p);
    }
  }

}
