import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

export const roleGuard: CanActivateFn = (route:ActivatedRouteSnapshot) => {
  const router= inject(Router);

  const token = localStorage.getItem('token');
  if (!token) {
    router.navigate(['/auth/login']);
    return false;
  }
  const decoded:any=jwtDecode(token);

  const role=decoded['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];

  const allowedRoles=route.data['roles'];

  if (allowedRoles.includes(role)) {
    return true;
  }
  router.navigate(['/home']);
  return false;
};
