import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { BehaviorSubject, Observable, of as observableOf } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productListSubject = new BehaviorSubject<Product[]>([]);

  constructor(private http: HttpClient) {
    this.reloadProducts();
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>("api/product");
  }

  addProduct(product: Product): Observable<any> {
    // let productClone: Product = Object.assign({}, product);
    // productClone.id = this.products.length + 1;
    // productClone.quantity = 0;
    // this.products.push(productClone);
    // console.log(this.products);
    // return new Observable(observer => {
    //   observer.next(productClone);
    //   observer.complete();
    // })
    return this.http.post<Product>("api/product", product);
  }

  changeQuantity(id: Number, amountChange: Number): Observable<any> {
    // let p = this.products.find((prod) => {
    //   return prod.id === id;
    // });

    // return new Observable(observer => {
    //   if(!p){
    //     observer.error("Product with given id not found!");
    //   } else {
    //     p.quantity += amountChange;
    //     observer.next(p);
    //   }
    //   observer.complete();
    // });
    return this.http.patch("api/product/" + id, {"changeInQuantity": amountChange});
  }

  updateProductsList(products: Product[]) {
    this.productListSubject.next(products);
  }

  getProductListObservable(): Observable<Product[]> {
    return this.productListSubject.asObservable();
  }

  reloadProducts() {
    this.getProducts().subscribe({
      next: (products: Product[]) => {
        this.updateProductsList(products);
      },
      complete: () => {
        console.log("Finished loading products in service!");
      }
    });
  }

}
