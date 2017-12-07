import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'ttt-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private userIsLogged: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.userIsLogged = this.authService.isLogged();
    this.authService.userAuthenticated.subscribe(
      (data: boolean) => this.userIsLogged = data
    );
  }

  logout() {
    this.authService.logout();
  }

}
