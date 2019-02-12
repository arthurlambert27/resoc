import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  authStatus: boolean;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authStatus = this.authService.isAuth;
  }

  onSignIn(){
    this.authService.signIn().then(
      () => {
        console.log("Connection réussi!");
        this.authStatus = this.authService.isAuth;
        this.router.navigate(["accueil"])
        
      }
    )
  }

  onSignOut(){
    this.authService.signOut();
    this.authStatus = this.authService.isAuth
  }
}