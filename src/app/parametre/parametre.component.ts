import { Component, OnInit } from '@angular/core';
import { AuthService } from "src/services/auth.service";

@Component({
  selector: 'app-parametre',
  templateUrl: './parametre.component.html',
  styleUrls: ['./parametre.component.css']
})
export class ParametreComponent implements OnInit {

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() {
    
  }

}
