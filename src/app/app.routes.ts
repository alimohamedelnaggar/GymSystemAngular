import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth-guard';
import { Home } from './features/home/pages/home/home';

export const routes: Routes = [

    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path:'home', component:Home},
    {path: 'auth', loadChildren: () => import('./features/auth/auth.routes').then((m) => m.AUTH_ROUTES)},
    {path:'**', redirectTo: 'auth/login', pathMatch: 'full'},
];
