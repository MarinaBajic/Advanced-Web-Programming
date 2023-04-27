import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/model/stock';

// The @Component decorator is used to define the metadata of the component.
// This component is used to display the stock information.
@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnInit{
  public stock: Stock;

  constructor(){

  }

  ngOnInit(): void {
    this.stock = new Stock("Test Stock Company", "TSC", 85, 80);
  }

  toggleFavorite(event: Event): void {
    console.log("Added stock to favorites, " + event + " is activated.")
    this.stock.favorite = !this.stock.favorite;
  }
}
