import { Component, OnInit, Input } from '@angular/core';
import { Product, IProduct } from '../products/product.model';

@Component({
  selector: 'ttt-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: IProduct = new Product();

  constructor() { }

  ngOnInit() {
  }

}
