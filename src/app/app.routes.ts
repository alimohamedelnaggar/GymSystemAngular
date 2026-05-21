import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth-guard';

export const routes: Routes = [

    {path: '', redirectTo: 'auth/login', pathMatch: 'full'},
    {path: 'auth', loadChildren: () => import('./features/auth/auth.routes').then((m) => m.AUTH_ROUTES)},
    {path:'home', loadComponent: () => import('./features/home/pages/home/home').then(m => m.Home), canActivate: [authGuard]},
    {path:'**', redirectTo: 'auth/login', pathMatch: 'full'},
];
