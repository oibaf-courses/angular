import {
  Component,
  OnInit
} from '@angular/core';
import {
  ProductsService
} from './products.service';

@Component({
  selector: 'ttt-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductsService]
})
export class ProductsComponent implements OnInit {

  private products: any[];

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.productsService.getAll().subscribe(
      (data: any[]) => this.products = data,
      error => {}
    );
  }

}
