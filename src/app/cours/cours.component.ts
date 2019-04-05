import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CoursService} from "src/services/cours.service";
import { AuthService } from "src/services/auth.service";

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})
export class CoursComponent implements OnInit {

  
    message = new FormControl('')
  

  @Input() coursTitre: string;
  @Input() coursStatus: string;
  @Input() coursContenu: any[];
  @Input() coursForum: any[];
  constructor(public coursService: CoursService, public authService: AuthService) { 
    
  }

  ngOnInit() {
    
    
  }
  displayForumChat(sujet){
    if (sujet.click){
      sujet.click = false;
    }
    else{
      sujet.click = true;
      }
    
  }
  getColor(){
    if(this.coursStatus === "on"){
      return 'green';
    }
    else if(this.coursStatus ==="En cours"){
      return "red";
    }
  }
  color(truc){
    if (truc ==='titre'){
      return 'red';
    }
    else{
      return 'black';
    }
    
  }
  envoitMessage(sujet){
    let user = ""
    if(this.authService.userData.displayName){
      user= this.authService.userData.displayName}
    else{
      user =  this.authService.userData.email
    }
    sujet.chat.push({
      auteur: user,
      message: this.message.value,
    })
    this.coursService.saveCoursToServer();
  }

}
