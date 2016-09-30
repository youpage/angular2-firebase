import { Component } from '@angular/core';
import { AuthService } from '../../auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(private auth: AuthService) { }

  signOut(): void {
    this.auth.signOut();
  }

}
