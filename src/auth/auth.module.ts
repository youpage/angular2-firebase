import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

// Guards
import { AuthGuard } from './guards/auth-guard';
import { UnauthGuard } from './guards/unauth-guard';
// Services
import { AuthService } from './services/auth-service';
// Custom
import { SignInComponent } from './components/sign-in';
import { LoginForm } from './components/login-form';
// Routes
const routes: Routes = [
  { path: '', component: SignInComponent, canActivate: [UnauthGuard] }
];

@NgModule({
  declarations: [
    SignInComponent,
    LoginForm
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    AuthGuard,
    AuthService,
    UnauthGuard
  ]
})

export class AuthModule { }

export { AuthGuard };
export { AuthService };
export { UnauthGuard };
