import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth-service';

@Component({
  templateUrl: './sign-in.html'
})

export class SignInComponent {

  constructor(private auth: AuthService, private router: Router) {

  }

  signInWithGoogle(): void {
    this.auth.signInWithGoogle()
      .then(() => this.postSignIn());
  }

  /*
    signInWithTwitter(): void {
      this.auth.signInWithTwitter()
        .then(() => this.postSignIn());
    }
  
    signInWithGithub(): void {
      this.auth.signInWithGithub()
        .then(() => this.postSignIn());
    }
  */

  private postSignIn(): void {
    this.router.navigate(['/dashboard']);
  }
}
