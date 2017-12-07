import { Output, EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Router } from '@angular/router';
/* Angular2 ou 4:
import { Http } from '@angular/http';
*/

@Injectable()
export class AuthService {

  private user: any;
  @Output() userAuthenticated: EventEmitter<boolean> = new EventEmitter();

  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string): Observable<boolean> {
      return this.http.get(environment.usersEndpoint
                            + `?username=${username}&password=${password}`)
              .map((data: any[]) => {
                if (!data.length) { return false; }
                const [ user ] = data;
                delete user.password;
                localStorage.setItem('user', JSON.stringify(user));
                this.userAuthenticated.emit(true);
                return true;
              })
              .catch(error => Observable.throw(error));
  }

  logout() {
    localStorage.removeItem('user');
    this.userAuthenticated.emit(false);
    this.router.navigate(['/']);
  }

  isLogged(): boolean {
    try {
      const data = localStorage.getItem('user');
      if (!data) {
        return false;
      }
      this.user = JSON.parse(data);
      return true;
    }catch (error) {
      console.log(error);
      return false;
    }
  }

}
