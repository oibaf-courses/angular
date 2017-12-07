import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
/* Angular2 ou 4:
import { Http } from '@angular/http';
*/

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<boolean> {
      return this.http.get(environment.usersEndpoint
                            + `?username=${username}&password=${password}`)
              .map((data: any[]) => {
                if (!data.length) { return false; }
                const [ user ] = data;
                delete user.password;
                localStorage.setItem('user', JSON.stringify(user));
                return true;
              })
              .catch(error => Observable.throw(error));
  }

}
