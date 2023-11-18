import { Component } from '@angular/core';
import { Product } from '../model/products';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  title: string = 'WELCOMEEEE';
  fruits: string[] = ['apple', 'banana', 'cherry'];
  colors: string[] = ['red', 'blue', 'green'];
  color = '';
  t: number = 1;
  prix!: number;
  listPorduct: Product[] = [
    { id: 12, title: 'Dr. Nice', price: 10, quantity: 2, like: 1 },
    { id: 13, title: 'Bombasto', price: 11, quantity: 2, like: 11 },
    { id: 14, title: 'Celeritas', price: 18, quantity: 2, like: 13 },
    { id: 15, title: 'Magneta', price: 15, quantity: 2, like: 544 },
    { id: 16, title: 'RubberMan', price: 13, quantity: 2, like: 41 },
    { id: 17, title: 'Dynama', price: 50, quantity: 2, like: 13 },
    { id: 18, title: 'Dr. IQ', price: 21, quantity: 2, like: 120 },
    { id: 19, title: 'Magma', price: 63, quantity: 2, like: 10 },
    { id: 20, title: 'Tornado', price: 9, quantity: 2, like: 18 },
  ];
  sayHello() {
    //   alert('hello');
    this.t = Math.floor(3 * Math.random());
    this.color = this.colors[this.t];
  }
  changeValue(i: number) {
    const index = this.listPorduct.findIndex((product) => product.id === i);
    this.listPorduct[index].like++;
  }

  changeQuantity(i: number) {
    const index = this.listPorduct.findIndex((product) => product.id === i);
    this.listPorduct[index].quantity--;
  }
}
