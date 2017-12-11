import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ttt-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private authService: AuthService,
              private router: Router,
            private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: this.formBuilder.control('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      password: this.formBuilder.control('', [
        Validators.required,
      ]),
    });
  }

  doLogin() {
    if (this.loginForm.valid) {
      this.authService.login(this.username.value, this.password.value).subscribe(
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

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

}
