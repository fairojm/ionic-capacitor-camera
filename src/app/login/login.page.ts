import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {  ToastController } from '@ionic/angular';
import { AuthService } from '../auth.service';
import { ToastService } from '../toast.service';
import userDetails from '../user-details';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  userForm: FormGroup = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  })
  userDetails = userDetails

  constructor(private authService:AuthService, private toastService: ToastService, private router: Router) { 
    console.log(this.userForm.value)
  }

  ngOnInit() {
    //! Setting credentials by default for easy login
    this.userForm.patchValue(
      {
        email: userDetails[0]?.email || null,
        password: userDetails[0]?.password || null
      }
    )
  }

  login() {
    console.log(this.userForm.value)
    if(this.userForm.invalid) {
      this.toastService.presentToast("Form is invalid")
      return
    }
    if(this.authService.validateCredential(this.userForm.value))  {
      this.toastService.presentToast("Login Successful")
      localStorage.setItem('login_details', JSON.stringify(this.userForm.value));
      this.router.navigate([''],{replaceUrl:true});
    }
    else{
      this.toastService.presentToast("Credential is invalid")
    }
    
  }
  

}
