import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppTitleComponent } from './app-title/app-title.component';
import { StockItemComponent } from './stock/stock-item/stock-item.component';

@NgModule({
  declarations: [
    AppComponent, 
    AppTitleComponent, StockItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
