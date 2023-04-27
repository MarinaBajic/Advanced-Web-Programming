import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppTitleComponent } from './app-title/app-title.component';
import { StockItemComponent } from './stock/stock-item/stock-item.component';

// The @NgModule decorator is used to define the root module of the application.
@NgModule({
  // The declarations property is used to define the components, directives and pipes that belong to this module.
  declarations: [
    AppComponent, 
    AppTitleComponent, 
    StockItemComponent
  ],
  // The imports property is used to define the modules that are required by this module.
  imports: [
    BrowserModule
  ],
  // The providers property is used to define the services that are provided by this module.
  providers: [],
  // The bootstrap property is used to define the root component of the application.
  bootstrap: [AppComponent]
})
export class AppModule { }
