import { VerifyOtp } from './../pages/verify-otp/verify-otp';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {jwtDecode} from 'jwt-decode';
@Injectable({
  providedIn: 'root',
})
export class Auth {
  private http=inject(HttpClient);

  private apiUrl='https://localhost:7282/api/Account';

  register(data:any):Observable<any>{
    return this.http.post(`${this.apiUrl}/Register`,data);
  }

  login(data:any):Observable<any>{
    return this.http.post(`${this.apiUrl}/login`,data);
  }

  saveToken(token:string){
    localStorage.setItem('token',token);
  }

  getToken(){
    return localStorage.getItem('token');
  }
  logout(){
    localStorage.removeItem('token');
  }
  getRoleFromToken(){
    const token=this.getToken();
    if(!token) return null;
    
    const decodedToken:any=jwtDecode(token);
    console.log(decodedToken);
    return decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'] || null;

  }
  VerifyOtp(data:any):Observable<any>{
    return this.http.post(`${this.apiUrl}/verify-otp`,data);
  }
  ResendOtp(email:string):Observable<any>{
    return this.http.post(`${this.apiUrl}/resend-otp`,{email});
  }
}
