import { Component, inject } from '@angular/core';
import { Auth } from '../../services/auth';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-social-callback',
  imports: [],
  templateUrl: './social-callback.html',
  styleUrl: './social-callback.scss',
  standalone: true,
})
export class SocialCallback {
   private route =
    inject(ActivatedRoute);

  private router =
    inject(Router);

  private authService =
    inject(Auth); 

  constructor() {
    console.log(window.location.href);

console.log(
  this.route.snapshot.queryParams
);
    const token = this.route.snapshot.queryParams['token'];
    if (!token) {
      this.router.navigate(['/auth/login']);
      return;
    
    }
    this.authService.saveToken(token);
    const role = this.authService.getRoleFromToken();
    console.log(role);
    switch (role) {
     case 'Admin':

        this.router.navigateByUrl(
          '/admin/dashboard'
        );

        break;

      case 'Coach':

        this.router.navigateByUrl(
          '/coach/dashboard'
        );

        break;

      default:

        this.router.navigateByUrl(
          '/home'
        );
    }
  }
}
