import { Component, OnInit } from '@angular/core';
import { IProduct, Product } from '../products/product.model';
import { ProductsService } from '../products/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ttt-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.css']
})
export class ProductsFormComponent implements OnInit {

  product: IProduct = new Product();

  constructor(private productsService: ProductsService, private router: Router) { }

  ngOnInit() {
  }

  save() {
    this.productsService.create(this.product).subscribe(
      data => this.router.navigate(['/products'])
    );
  }

}
