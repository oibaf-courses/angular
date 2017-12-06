import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products/products.service';
import { Product, IProduct } from '../products/product.model';

@Component({
  selector: 'ttt-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  providers: [ProductsService]
})
export class ProductDetailsComponent implements OnInit {

  private product: IProduct;

  constructor(private activatedRoute: ActivatedRoute, private productsClient: ProductsService) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.productsClient.get(id).subscribe(
     (data: IProduct) => this.product = data
    );
  }

}
