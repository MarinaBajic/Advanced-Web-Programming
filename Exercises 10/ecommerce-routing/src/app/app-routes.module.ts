import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CreateProductComponent } from './create-product/create-product.component';

const appRoutes: Routes = [
  {path: "", redirectTo: "/list", pathMatch: "full"},
  {path: "list", component: ProductListComponent},
  {path: "create", component: CreateProductComponent},
  {path: "**", redirectTo: ""}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ], 
  exports: [
    RouterModule
  ]
})
export class AppRoutesModule { }
