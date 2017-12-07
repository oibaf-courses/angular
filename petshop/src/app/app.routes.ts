import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductComponent } from './product/product.component';
import { ProductsFormComponent } from './products-form/products-form.component';

export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    /*
    { path: 'products', component: ProductsComponent, pathMatch: 'full'},
    { path: 'products/:id', component: ProductDetailsComponent},
    */
    { path: 'products',
      children: [
          { path: '', component: ProductsComponent, pathMatch: 'full'},
          { path: 'new', component: ProductsFormComponent },
          { path: ':id', component: ProductDetailsComponent },
      ]
    },
    { path: '**', redirectTo: 'home' }
];
