import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Product, IProduct } from './product.model';
/* Angular2 ou 4:
import { Http } from '@angular/http';
*/

@Injectable()
export class ProductsService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<IProduct[]> {
    return this.http.get(environment.productsEndpoint)
    .map((data: IProduct[]) => data);
  }

  get(id: number): Observable<IProduct> {
    return this.http.get(environment.productsEndpoint + '/' + id)
    .map((data: IProduct) => data);
  }

}
