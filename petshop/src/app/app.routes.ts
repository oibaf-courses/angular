import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductComponent } from './product/product.component';
import { ProductsFormComponent } from './products-form/products-form.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guard/auth.guard';

export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'products',
      children: [
          { path: '', component: ProductsComponent, pathMatch: 'full'},
          { path: 'new', component: ProductsFormComponent, canActivate: [ AuthGuard ] },
          { path: ':id', component: ProductDetailsComponent },
      ]
    },
    // { path: 'products', component: ProductsComponent, pathMatch: 'full'},
    // { path: 'products/new', component: ProductsFormComponent, canActivate: [ AuthGuard ], pathMatch: 'full' },
    // { path: 'products/:id', component: ProductDetailsComponent, pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: '**', redirectTo: 'home' }
];
