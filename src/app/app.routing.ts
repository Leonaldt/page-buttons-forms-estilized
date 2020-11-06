import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';

const APP_ROUTES: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'home', component: HomePageComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
