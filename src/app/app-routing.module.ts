import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialComponent } from './material/material.component';
import { SigninComponent } from './signin/signin.component';
import { RegistrationComponent } from './registration/registration.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { HomeComponent } from './home/home.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  {path:"material", component:MaterialComponent, canActivate:[authGuard]},
  {path:"signin", component:SigninComponent},
  {path:"signup", component:RegistrationComponent},
  {path:"forgotpassword", component:ForgotPasswordComponent},
  {path:"verifyemail", component:VerifyEmailComponent},
  {path:"home", component:HomeComponent},
  {path:"  ", component:HomeComponent},
  {path:"**", component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
