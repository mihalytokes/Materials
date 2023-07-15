import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { GoogleAuthProvider, sendEmailVerification } from 'firebase/auth';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedUser=false;
  isLogged:any=new Subject();
  public userData:any;
  constructor(private afAuth:AngularFireAuth, private router:Router) { }

  getIsLogged():Observable<any> {
    this.afAuth.authState.subscribe((user)=>{
      console.log(user);
      if (user) {
      this.isLoggedUser=true;
      this.userData=user;
      }
      else {
        this.isLoggedUser=false;
        this.userData=null;
      }
      this.isLogged.next(this.isLoggedUser);
    });
    return this.isLogged;
  }

  SignUp(email:string, password:string)
  {
    return this.afAuth.createUserWithEmailAndPassword(email,password)
    
  }
  SignIn(email:string, password:string)
  {
    return this.afAuth.signInWithEmailAndPassword(email,password);
  }
  SignOut()
  {
    return this.afAuth.signOut();
  }
  GoogleAuth()
  {
    return this.AuthLogin(new GoogleAuthProvider())
  }
  AuthLogin(provider:any)
  {
    return this.afAuth.signInWithRedirect(provider);
  }
  SendEmailVerification(){
  return this.afAuth.currentUser
    .then((u:any)=>u.sendEmailVerification())
    .then(()=>this.router.navigate(['/verifyemail']))
    .catch((error)=>{alert(error.message)});
  }
  ForgotPassword(email:string){
   return this.afAuth.sendPasswordResetEmail(email);
  }

  SendEmail(){
  }

}
