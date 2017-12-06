import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { Product, IProduct } from '../products/product.model';

@Component({
  selector: 'ttt-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductsService]
})
export class ProductsComponent implements OnInit {

  private products: IProduct[];

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.productsService.getAll().subscribe(
      (data: IProduct[]) => this.products = data,
      error => {}
    );
  }

}
