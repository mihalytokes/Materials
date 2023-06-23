import { Component, Output } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})

export class ForgotPasswordComponent {
  userEmailAddress="";
  constructor (private authservice:AuthService){
    this.userEmailAddress=this.authservice.userData?.email;
  }
  forgotPassword(userEmail:string){
    this.authservice.ForgotPassword(userEmail)
    .then(()=>alert("Password reset email sent, check your inbox!"))
  }

}
