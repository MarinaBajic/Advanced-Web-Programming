import { Component } from '@angular/core';

// The @Component decorator is used to define the metadata of the component.
// This is main component of the application.
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stock-market';
}
