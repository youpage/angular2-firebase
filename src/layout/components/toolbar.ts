import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { AuthService } from '../../auth';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './toolbar.html',
  selector: 'toolbar'
})

export class ToolbarComponent {
  @Input() authenticated: boolean;
  //@Input() title: string;
  //@Output() signOut = new EventEmitter(false);

  public user: any;
  public title: string;

  constructor(private auth: AuthService, private route: ActivatedRoute, private router: Router) {
    console.log('Logged in:' + auth.authenticated);
    this.title = route.snapshot.data[0].title
    this.user = auth.user;
    this.user.notifications = 100;
  }

  signOut(): void {
    this.auth.signOut()
    .then(() => this.router.navigate(['/']));
  }

  profile(): void {
    console.log("Profile");
  }
}