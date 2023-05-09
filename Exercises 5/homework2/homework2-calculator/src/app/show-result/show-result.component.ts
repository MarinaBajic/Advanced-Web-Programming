import { Component, OnInit } from '@angular/core';
import { Result } from '../model/result';

@Component({
  selector: 'app-show-result',
  templateUrl: './show-result.component.html',
  styleUrls: ['./show-result.component.css']
})
export class ShowResultComponent implements OnInit{
  result: Result;
  received: boolean = false;
  resultClasses: {[key: string]: boolean};

  constructor() { }

  ngOnInit(): void {
    this.received = false;
  }

  receiveResult(result: Result): void {
    this.result = result;
    this.resultClasses = {
      "success": ["+", "-", "*", "/"].includes(this.result.operation),
      "error": !(["+", "-", "*", "/"].includes(this.result.operation))
    }
    this.received = true;
  }
}
