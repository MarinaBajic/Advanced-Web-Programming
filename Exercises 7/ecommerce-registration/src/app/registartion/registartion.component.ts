import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registartion',
  templateUrl: './registartion.component.html',
  styleUrls: ['./registartion.component.css']
})
export class RegistartionComponent {
  validated: boolean;
  form_classes: {[key: string]: boolean}
  defaultUserType: string;
  countries: string[];

  constructor() {
    this.validated = false;
    this.form_classes = {"was-validated": false};
    this.defaultUserType = "person";
    this.countries = [
      "Serbia",
      "Montenegro",
      "North Macedonia",
      "Croatia",
      "Bosnia and Hercegovina",
      "Slovenia"
    ];
  }

  updateBootstrapValidation(){
    this.form_classes = {"was-validated": this.validated};
  }

  onSubmit(form: NgForm) {
    console.log(form);
    console.log(form.form.value);
    this.validated = true;
    this.updateBootstrapValidation();
  }

  onReset(form: NgForm){
    form.reset();
    this.form_classes = {"was-validated": false};
  }
}
