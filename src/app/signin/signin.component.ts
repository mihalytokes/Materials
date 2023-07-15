import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  constructor(private authService: AuthService, private router:Router){}

  signIn(email:string, password:string){
    this.authService.SignIn(email, password)
    .then(()=>(this.authService.getIsLogged().subscribe(()=> {if (this.authService.isLogged) this.router.navigate(['/home'])})))
    .catch((error)=>{alert(error.message)});
  }
  googleAuth(){
    this.authService.GoogleAuth()
    .then(()=>(this.authService.getIsLogged().subscribe(()=> {if (this.authService.isLogged) this.router.navigate(['/home'])})))
    .catch((error)=>{alert(error.message)});
  }
}
