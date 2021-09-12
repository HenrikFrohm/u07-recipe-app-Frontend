import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from './auth/shared/token.service';
import { AuthStateService } from './auth/shared/auth-state.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//export class AppComponent {
//  public constructor(private titleService: Title,
//    private route: ActivatedRoute) { }
//
//  public setTitle(newTitle: string) {
//    this.titleService.setTitle(newTitle);
//  }
//} 

export class AppComponent implements OnInit {
  isSignedIn: boolean;

  constructor(
    private auth: AuthStateService,
    public router: Router,
    public token: TokenService,
  ) {
  }

  ngOnInit() {
    this.auth.userAuthState.subscribe(val => {
        this.isSignedIn = val;
    });
  }

  // Signout
  signOut() {
    this.auth.setAuthState(false);
    this.token.removeToken();
    this.router.navigate(['login']);
  }

}

