import { Routes } from '@angular/router';

import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { AuthLayout } from '../../layouts/auth-layout/auth-layout';
import { VerifyOtp } from './pages/verify-otp/verify-otp';
import { EmailConfirmation } from './pages/email-confirmation/email-confirmation';
import { SocialCallback } from './pages/social-callback/social-callback';

export const AUTH_ROUTES: Routes = [
  {
    path: '',
    component: AuthLayout,
    children: [
      { path: 'login', component: Login },
      { path: 'register', component: Register },
      { path: 'verify-otp', component: VerifyOtp },
      {path:'email-confirmation',component:EmailConfirmation},
      {path:'social-callback',component:SocialCallback},
      { path: '', redirectTo: 'login', pathMatch: 'full' },
    ],
  },
];
