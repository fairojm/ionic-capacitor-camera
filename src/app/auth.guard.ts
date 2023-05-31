// import { inject, Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, CanActivate, createUrlTreeFromSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
// import { Observable } from 'rxjs';
// import userDetails from "./user-details"
// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard {
//   constructor(){}
//   canActivate(
//     route: ActivatedRouteSnapshot,
//     ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//       const router = inject(Router)
//     let loginDetails: any = localStorage.getItem('login_details')
//     console.log(userDetails)

//     if (loginDetails) {
//       loginDetails = JSON.parse(loginDetails)
//       if (userDetails.some(val => val.email === loginDetails.email && val.password === loginDetails.password)) {
//         return true
//       }
//     }
//     console.log("data", route.data);
//     // createUrlTreeFromSnapshot(route,['/','/login'])
//     router.navigate(['login'])
//     return false;
//   }

// }



import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const AuthGuard = (next: ActivatedRouteSnapshot) => {
  const router = inject(Router)
  const authService = inject(AuthService)
  let loginDetails: any = localStorage.getItem('login_details')

  if (loginDetails) {
    loginDetails = JSON.parse(loginDetails)
    if (authService.validateCredential(loginDetails)) {
      return true
    }
  }
  router.navigate(['login'], {replaceUrl:true})
  return false;
};
