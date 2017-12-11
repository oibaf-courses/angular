import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'ttt-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private loginForm: FormGroup;

  constructor(private authService: AuthService,
              private router: Router,
            private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: '',
      password: '',
    });
  }

  doLogin() {
    const username = this.loginForm.get('username');
    const password = this.loginForm.get('password');
    this.authService.login(username.value, password.value).subscribe(
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
