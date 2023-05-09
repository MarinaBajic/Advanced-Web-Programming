import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Result } from '../model/result';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit{
  public a: number;
  public b: number;
  public digits: number[];
  public operations: string[];
  public tiles: string[];
  public operation: string;
  public text: string;
  public decimalPlace: number;
  @Output() public result: EventEmitter<Result>;

  constructor() { 
    this.result = new EventEmitter<Result>();
  }

  ngOnInit(): void {
      this.a = 0;
      this.b = 0;
      this.digits = [0,1,2,3,4,5,6,7,8,9];
      this.operations = ['+','-','*','/'];
      this.tiles = ['1','2','3','+','4','5','6','-','7','8','9','*','0','.','=','/'];
      this.operation = "";
      this.text = "";
      this.decimalPlace = 0;
  }

  calculate(): number {
    switch (this.operation) {
      case '+':
        return this.a + this.b;
      case '-':
        return this.a - this.b;
      case '*':
        return this.a * this.b;
      case '/':
        return this.a / this.b;
      default:
        return 0;
    }
  }

  reset(): void {
    this.text = "";
    this.a = 0;
    this.b = 0;
    this.operation = "";
    this.decimalPlace = 0;
  }

  tilePress(tile: string): void {
    this.text += tile;
    if (tile === '=') {
      this.result.emit({result: this.calculate(), operation: this.operation});
      this.reset();
    } else if (this.operations.includes(tile)) {
      if(!this.operation){
        this.operation = tile;
        this.decimalPlace = 0;
      } else {
        this.result.emit({result: 0, operation: ""});
        this.reset();
      }
    } else if(this.digits.includes(Number(tile))) {
      if (!this.operation) {
        if(this.decimalPlace === 0){
          this.a = this.a * 10 + Number(tile);
        } else {
          this.a += Number(tile) / Math.pow(10, this.decimalPlace);
          this.decimalPlace++;
        }
      } else {
        if(this.decimalPlace === 0){
          this.b = this.b * 10 + Number(tile);
        } else {
          this.b += Number(tile) / Math.pow(10, this.decimalPlace);
          this.decimalPlace++;
        }
      }
    } else if(tile === '.') {
      this.decimalPlace = 1;
    }
  }
  
  colorTile(index: number): boolean {
    let row = Math.floor(index / 4);
    let col = index % 4;

    if(row % 2 === 0 && col % 2 === 1) {
      return true;
    }

    if(row % 2 === 1 && col % 2 === 0) {
      return true;
    }

    return false;
    
  }
}
