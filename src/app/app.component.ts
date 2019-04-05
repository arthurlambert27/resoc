import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
	
	
  isAuth: boolean;
  items: any;

  constructor(private authService: AuthService) { 
    
    
    
    
   }
  ngOnInit() {
    
  }
  
}