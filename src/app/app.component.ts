import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import * as firebase from 'firebase';
import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
  animateChild
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routerAnimation', [
      transition('cours => liste', [
        // Initial state of new route
        query(':enter',
          style({
            position: 'fixed',
            width:'100%',
            transform: 'translateX(-100%)'
          }),
          {optional:true}),

        // move page off screen right on leave
        query(':leave',
          animate('100ms ease',
            style({
              position: 'fixed',
              width:'100%',
              transform: 'translateX(+100%)'
            })
          ),
        {optional:true}),

        // move page in screen from left to right
        query(':enter',
          animate('200ms ease',
            style({
              opacity: 1,
              transform: 'translateX(0%)'
            })
          ),
        {optional:true}),
      ]),
      transition('liste => cours', [
        // Initial state of new route
        query(':enter',
          style({
            position: 'fixed',
            width:'100%',
            transform: 'translateX(+100%)'
          }),
          {optional:true}),

        // move page off screen right on leave
        query(':leave',
          animate('100ms ease',
            style({
              position: 'fixed',
              width:'100%',
              transform: 'translateX(-100%)'
            })
          ),
        {optional:true}),

        // move page in screen from left to right
        query(':enter',
          animate('100ms ease',
            style({
              opacity: 1,
              transform: 'translateX(0%)'
            })
          ),
        {optional:true}),
      ])
    ])
  ]
})

export class AppComponent {
  
	
	
  isAuth: boolean;
  items: any;

  constructor(private authService: AuthService) { 
    
    
    
    
   }
  ngOnInit() {
    
  }

  getRouteAnimation(outlet) {
    return outlet.activatedRouteData.animation
  }

  
}