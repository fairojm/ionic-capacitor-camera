import { Injectable } from '@angular/core';
import userDetails from './user-details';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  validateCredential(data: any) :boolean {
    return userDetails.some(val => val.email === data.email && val.password === data.password)
  }
}
