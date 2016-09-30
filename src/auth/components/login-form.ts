import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth-service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'login-form',
    templateUrl: 'login-form.html'
})

export class LoginForm {
    loginForm: FormGroup;
    register: boolean = false;

    // need a double escape \\ for . and ^ at the begining and $ at the end is added by default
    emailRegEx = '[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}';

    constructor(fb: FormBuilder, private auth: AuthService, private router: Router) {
        this.loginForm = fb.group({
            'email': [null, [Validators.required, Validators.pattern(this.emailRegEx)]],
            'password': [null, Validators.required],
        });
    }

    submitForm(value: any) {
        let form = {
            'email': value.email,
            'password': value.password,
        };

        if (this.register) {
            this.registerUser(form);
        } else {
            this.signInWithUserPass(form);
        }
    }

    regUser() {
        this.register = !this.register;
    }

    signInWithUserPass(obj): void {
        this.auth.signInWithEmailAndPassword(obj.email, obj.password)
            .then(() => this.postSignIn())
            .catch(error => console.log('ERROR @ AuthService#signIn() :', error));
    }

    registerUser(obj): void {
        this.auth.createUserWithEmailAndPassword(obj.email, obj.password)
            .then(() => this.postSignIn());
    }

    resetPassword(email): void {
        this.auth.sendPasswordResetEmail(email)
            .then(() => this.postSignIn());
    }

    private postSignIn(): void {
        this.loginForm.reset();
        this.router.navigate(['/dashboard']);
    }

}
