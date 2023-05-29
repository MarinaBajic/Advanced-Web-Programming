import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { Observable, of as observableOf } from 'rxjs';

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

  getProducts(): Observable<Product[]> {
    return observableOf(this.products);
  }

  addProduct(product: Product): Observable<any> {
    let productClone: Product = Object.assign({}, product);
    productClone.id = this.products.length + 1;
    productClone.quantity = 0;
    this.products.push(productClone);
    console.log(this.products);
    return new Observable(observer => {
      observer.next(productClone);
      observer.complete();
    })
  }

  changeQuantity(id: number, amountChange: number): Observable<any> {
    let p = this.products.find((prod) => {
      return prod.id === id;
    });

    return new Observable(observer => {
      if(!p){
        observer.error("Product with given id not found!");
      } else {
        p.quantity += amountChange;
        observer.next(p);
      }
      observer.complete();
    });
  }

}
