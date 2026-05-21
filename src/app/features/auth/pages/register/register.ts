import { Component, inject, signal } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';
import { Auth } from '../../services/auth';
@Component({
  selector: 'app-register',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, MatIconModule, MatCheckboxModule, RouterLink],
  templateUrl: './register.html',
  styleUrls: ['./register.scss'],
})
export class Register {

  private fb=inject(FormBuilder);
  private authService=inject(Auth);
  private router=inject(Router);
  hidePassword=signal(true);
  hideConfirmPassword=signal(true);

  form =this.fb.group({

    fullName:['',[Validators.required]],
    email:['',[Validators.required,Validators.email]],
    phoneNumber:['',[Validators.required]],
    password:['',[Validators.required,Validators.minLength(6)]],
    confirmPassword:['',[Validators.required,Validators.minLength(6)]],
    acceptTerms:[false,[Validators.requiredTrue]],
  })
  submit(){
    console.log(this.form.value);
console.log(this.form.valid);
console.log(this.form.errors);
    if(this.form.invalid){
      this.form.markAllAsTouched();
      return;
    }
    const body={

      fullName:this.form.value.fullName,
      email:this.form.value.email,
      phoneNumber:this.form.value.phoneNumber,
      password:this.form.value.password,
      confirmPassword:this.form.value.confirmPassword,

    }
    this.authService.register(body).subscribe({
      next:(res)=>{

        console.log(res);

        if(res.success){
          this.router.navigate(['/auth/email-confirmation'],{queryParams:{verified:false}});
        }
        
      },
      error:(err)=>{
        console.log(err.error.errors);
      }
    })
  }
}
