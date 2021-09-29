import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../auth/shared/auth.service';

// User interface
export class User {
  name: String;
  email: String;
}

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent implements OnInit {
  UserProfile: User;

  constructor(
    private router: Router,
    public authService: AuthService
  ) {
   console.log(this.router.getCurrentNavigation().extras.state);
   const userData = this.router.getCurrentNavigation().extras.state;
   console.log(userData);
   if(userData && userData.user)
   this.UserProfile = userData.user;
   //this.UserProfile = userData.user;

   /*
    this.authService.profileUser().subscribe((data:any) => {
      console.log(data);
      this.UserProfile = data;
    })*/

    console.log('ctor ...s')
  }

  ngOnInit() { }

}
