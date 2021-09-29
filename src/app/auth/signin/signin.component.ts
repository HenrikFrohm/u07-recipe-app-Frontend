import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../auth/shared/auth.service';
import { FormBuilder, FormGroup } from "@angular/forms";
import { TokenService } from '../../auth/shared/token.service';
import { AuthStateService } from '../../auth/shared/auth-state.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit {
  loginForm: FormGroup;
  errors = null;

  constructor(
    public router: Router,
    public fb: FormBuilder,
    public authService: AuthService,
    private token: TokenService,
    private authState: AuthStateService,
  ) {
    this.loginForm = this.fb.group({
      email: [],
      password: []
    })
  }

  ngOnInit() { }

  onSubmit() {
    let resData;
      this.authService.signin(this.loginForm.value).subscribe(
        result => {
          console.log('on submit result')
          console.log(result);
          resData = result;
          this.responseHandler(result);
        },
        error => {
          console.log('error');
          console.log(error);
          this.errors = error.error;
        },() => {
          this.authState.setAuthState(true);
          this.loginForm.reset()
          this.router.navigate(['profile'],{state: resData } );
        }
      );
  }

  // Handle response
  responseHandler(data){
    this.token.handleData(data.access_token);
  }

}