import { Component } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {
  product: Product;
  confirmed: boolean;

  constructor() {
    this.reset();
  }

  nameToUpper(name: string){
    this.product.name = name.toUpperCase();
  }

  reset(){
    this.product = new Product("test", "", 0, "New");
    this.confirmed = false;
  }

  submit(){
    console.log(this.product);
  }
}
