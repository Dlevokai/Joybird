// ====== ./app/app.routes.ts ======

// Imports
// Deprecated import
// import { provideRouter, RouterConfig } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './products/product-list.component';
import { HomeComponent } from './home/home.component';

// Route Configuration
export const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'home', component: HomeComponent }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(routes);