import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'products', component: ProductsComponent, pathMatch: 'full'},
    { path: 'products/:id', component: ProductDetailsComponent},
    { path: '**', redirectTo: 'home' }
];
