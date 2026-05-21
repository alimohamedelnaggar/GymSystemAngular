import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { submit } from '@angular/forms/signals';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Auth } from '../../services/auth';
@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    RouterLink,
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  private authService = inject(Auth);
  private router = inject(Router);
  hidePassword = signal(true);
  private fb = inject(FormBuilder);
  private route=inject(ActivatedRoute);
  verified=false;
  constructor(){
    this.route.queryParams.subscribe(params=>{
      this.verified=params['verified'] === 'true';
    })
  }
  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    rememberMe: [false],
  });

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
    }

    this.authService.login(this.form.value).subscribe({
      next: (res: any) => {
        console.log(res);

        if (res.success) {
          this.router.navigate(['/auth/verify-otp'], {
            queryParams: { email: this.form.value.email },
          });
        }
      },

      error: (err) => {
        console.log(err);
      },
    });
  }
 googleLogin() {

  window.location.href =
    'https://localhost:7282/api/Account/external-login/google';

}

facebookLogin() {

  window.location.href =
    'https://localhost:7282/api/Account/external-login/facebook';

}

microsoftLogin() {

  window.location.href =
    'https://localhost:7282/api/Account/external-login/microsoft';

}
}
