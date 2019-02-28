import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
	construcor(){
		const config = {
    apiKey: "AIzaSyB-YzZiueSgvln1hLHIzW7FacQiKVnJl5Y",
    authDomain: "resoc-1f87d.firebaseapp.com",
    databaseURL: "https://resoc-1f87d.firebaseio.com",
    projectId: "resoc-1f87d",
    storageBucket: "resoc-1f87d.appspot.com",
    messagingSenderId: "1032696498466"
  };
  firebase.initializeApp(config);

		}
	

}
