import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router } from '@angular/router';
import { Auth } from '../../services/auth';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-verify-otp',
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './verify-otp.html',
  styleUrl: './verify-otp.scss',
})
export class VerifyOtp implements OnInit {
private cdr=inject(ChangeDetectorRef);
  countdown = 60;

canResend = false;

interval: any;
  private fb=inject(FormBuilder);

  private authService=inject(Auth);

  private router=inject(Router);

  private route=inject(ActivatedRoute);

  email='';

  /**
   *
   */
  constructor() {
    this.email=this.route.snapshot.queryParams['email'] ;
    
  }
    form=this.fb.group({
      otp:['',[Validators.required,Validators.minLength(6),Validators.maxLength(6)]]
    });

  ngOnInit(): void {
    this.StartTimer();
  }
  StartTimer(){
    this.canResend=false;
    this.countdown=60;

    this.interval=setInterval(()=>{
      this.countdown--;
      this.cdr.detectChanges();

      if(this.countdown<=0){
        clearInterval(this.interval);
        this.canResend=true;
        this.cdr.detectChanges();
      }
    },1000)
  }
  ResendOtp(){
    if(!this.canResend) return;

    this.authService.ResendOtp(this.email).subscribe({
      next:()=>{
        this.StartTimer();
      },
      error:(error:any)=>{
        console.error(error);
      }
    })
  }
  

  submit(){
    if(this.form.invalid){
      this.form.markAllAsTouched();
    }

    const body={
      email:this.email,
      otpCode:this.form.value.otp
    }
    console.log(body)
    this.authService.VerifyOtp(body).subscribe({
      next:(response:any)=>{

        console.log(response);

        const token=response.data.token;
        
        this.authService.saveToken(token);

        const role=this.authService.getRoleFromToken();

        switch(role){
          case 'Admin':
            this.router.navigate(['/admin']);
            break;
          case 'Trainer':
            this.router.navigate(['/trainer']);
            break;
          case 'Member':
            this.router.navigate(['/member']);
            break;
          default:
            this.router.navigate(['/']);
        }

        this.router.navigate(['/login']);
      },
      error:(error:any)=>{
        console.error(error);
      }
    })
  }
}
