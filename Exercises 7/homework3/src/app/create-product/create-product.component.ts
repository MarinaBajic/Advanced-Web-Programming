import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from '../model/product';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {

  public message = '';
  public validated: boolean;
  public form_classes: {[key: string]: boolean}

  constructor() {
    this.validated = false;
    this.form_classes = {"was-validated": false};
  }

  updateBootstrapValidation(){
    this.form_classes = {"was-validated": this.validated};
  }

  createProduct(productForm: NgForm) {
    this.validated = true;
    this.updateBootstrapValidation();
    if (productForm.invalid) {
      this.message = 'Please correct all errors and resubmit the form';
    } else {
      const product: Product = productForm.value.product;
      console.log('Creating product', product);
    }
  }

}
