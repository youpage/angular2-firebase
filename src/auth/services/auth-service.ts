import { Injectable } from '@angular/core';
import { AuthProviders, AuthMethods, FirebaseAuth, FirebaseAuthState } from 'angularfire2';

@Injectable()
export class AuthService {
  private authState: FirebaseAuthState = null;
  private method: number = AuthMethods.Popup;

  constructor(public auth$: FirebaseAuth) {
    auth$.subscribe((state: FirebaseAuthState) => {
      this.authState = state;
    });
  }

  get authenticated(): boolean {
    return this.authState !== null;
  }

  get id(): string {
    return this.authenticated ? this.authState.uid : '';
  }

  // Get Current User
  get user(): any {
    let user = {
      name: '',
      photo: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAMOAAAAJGMxYmVjYTcxLTJjMzAtNDI3Yy1hYjkwLTcyZDUxYTY0Zjk1Mg.jpg'
    };
    let authState = this.authState;

    console.log(authState.provider);
    // I don's see any other way to generally get the user than a switch
    switch (authState.provider) {
      case 4: // 4 is login and pass auth
        user.name = authState.auth.displayName || authState.auth.email;
        break;
      case 3: // google
        user.name = authState.google.displayName;
        user.photo = authState.google.photoURL;
        break;
      default:
        break;
    }
    return {
      name: user.name,
      photo: user.photo
    };
  }

  // Email & Password Login
  signInWithEmailAndPassword(email, password): firebase.Promise<FirebaseAuthState> {
    return this.auth$.login(
      { email, password },
      {
        provider: AuthProviders.Password,
        method: AuthMethods.Password,
      })
      .catch(error => console.log('ERROR @ AuthService#signInWithEmailAndPassword() :', error));
  }

  createUserWithEmailAndPassword(email, password): firebase.Promise<FirebaseAuthState> {
    return this.auth$.createUser({ email, password })
      .catch(error => console.log('ERROR @ AuthService#createUserWithEmailAndPassword() :', error));
  }

  sendPasswordResetEmail(email): firebase.Promise<FirebaseAuthState> {
    return this.authState = null;
  }

  // Social Media Login
  signIn(provider: number): firebase.Promise<FirebaseAuthState> {
    return this.auth$.login({ provider, method: this.method })
      .catch(error => console.log('ERROR @ AuthService#signIn() :', error));
  }

  signInWithGoogle(): firebase.Promise<FirebaseAuthState> {
    return this.signIn(AuthProviders.Google);
  }


  signInWithGithub(): firebase.Promise<FirebaseAuthState> {
    return this.signIn(AuthProviders.Github);
  }

  signInWithTwitter(): firebase.Promise<FirebaseAuthState> {
    return this.signIn(AuthProviders.Twitter);
  }

  signOut(): Promise<any> {
    this.auth$.logout();
    return new Promise((resolve, reject) => {
      setTimeout(resolve, 0);
    });
  }
}
