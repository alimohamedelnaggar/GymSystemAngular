import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {HostListener} from '@angular/core'; 
import{Router, RouterLink} from '@angular/router';
import { Auth } from '../../../auth/services/auth';
@Component({
  selector: 'app-navbar',
  imports: [RouterLink,CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
   authService=inject(Auth);
   router=inject(Router);

isProfileMenuOpen = false;

isMobileMenuOpen = false;
   toggleProfileMenu() {

  this.isProfileMenuOpen =
    !this.isProfileMenuOpen;

}

toggleMobileMenu() {

  this.isMobileMenuOpen =
    !this.isMobileMenuOpen;

}
   @HostListener('document:click')
    closeMenu(){
      this.isMobileMenuOpen=false;
    }

  logout(){
    this.authService.logout();
    this.router.navigateByUrl('home');
  }
}
