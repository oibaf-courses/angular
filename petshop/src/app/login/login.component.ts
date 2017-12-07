import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ttt-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private username: string;
  private password: string;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  doLogin() {
    this.authService.login(this.username, this.password).subscribe(
      (data: boolean) => {
        if (!data) {
          alert('Invalid user or password...');
          return;
        }
        this.router.navigate(['/products/new']);
      }
    );
  }

}
