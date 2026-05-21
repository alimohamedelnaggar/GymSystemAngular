import { ActivatedRoute, RouterLink } from '@angular/router';
import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-email-confirmation',
  imports: [CommonModule,RouterLink],
  templateUrl: './email-confirmation.html',
  styleUrl: './email-confirmation.scss',
})
export class EmailConfirmation {
  private router=inject(ActivatedRoute);

  verified=false;
  constructor() {

    this.router.queryParams.subscribe(params=>{
      this.verified=params['verified']==='true';
    });
    
  }
  resendEmail(){
    // Implement resend email logic here
    alert('Resend email functionality is not implemented yet.');

  }
}
