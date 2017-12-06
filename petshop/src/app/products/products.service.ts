import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
/* Angular2 ou 4:
import { Http } from '@angular/http';
*/

@Injectable()
export class ProductsService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(environment.productsEndpoint);
  }

}
