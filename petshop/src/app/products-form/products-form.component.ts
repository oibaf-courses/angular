import { Component, OnInit } from '@angular/core';
import { IProduct, Product } from '../products/product.model';

@Component({
  selector: 'ttt-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.css']
})
export class ProductsFormComponent implements OnInit {

  private product: IProduct = new Product();

  constructor() { }

  ngOnInit() {
  }

}
