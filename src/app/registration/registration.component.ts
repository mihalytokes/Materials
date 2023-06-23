import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  constructor(private authService: AuthService, private router:Router ){}

  signUp(email:string, password:string){
    this.authService.SignUp(email,password)
    .then(()=>this.authService.SendEmailVerification())
    .catch((error)=>{alert(error.message)});
  }

  googleAuth(){
    this.authService.GoogleAuth()
    .then(()=>{(this.router.navigate(['/material']))})
    .catch((error)=>{alert(error.message)});
  }
}
