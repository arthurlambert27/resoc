//Je passe beaucoup par des array afin de toujours pouvoir faire *ngFor dans le html



import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursService } from 'src/services/cours.service';
import { AuthService } from "src/services/auth.service";
import { FormGroup, FormControl } from '@angular/forms';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-viewcours',
  templateUrl: './viewcours.component.html',
  styleUrls: ['./viewcours.component.css']
})
export class ViewcoursComponent implements OnInit {
  id: any;
  name: string ="name"
  status: string ="statut"
  cours:any;
  sommaire_info: string = "cours"
  message = new FormControl('')
  titreNewTopic = new FormControl("")
  messageNewTopic = new FormControl("")
  creerNouveauSujet = false

  constructor(private route: ActivatedRoute, private coursService: CoursService, public authService: AuthService,  private _sanitizer: DomSanitizer) {


  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];


  }

  sommaireChange(nom, cours){
    this.sommaire_info = nom;
    console.log(this.sommaire_info);
    if(nom === "video"){
      console.log(cours.video)
      cours.video = this._sanitizer.bypassSecurityTrustResourceUrl(cours.video);
      console.log(cours.video)
    }
  }

  displayForumChat(sujet){
    if (sujet.click){
      sujet.click = false;
    }
    else{
      sujet.click = true;
      }

  }

  envoitMessage(sujet){
    let user = ""
    if(this.authService.userData){
      if(this.authService.userData.displayName){
        user= this.authService.userData.displayName
      }

      else if(this.authService.userData.email){
        user =  this.authService.userData.email
      }
    }

    else{
      user = "anonyme"
    }

    //Je passe par un array
    let array = [];
    for(let message in sujet.chat){
      array.push(sujet.chat[message])
    }

    array.push({
      auteur: user,
      message: this.message.value,
    })
    sujet.chat = array;
    this.coursService.saveCoursToServer();
    this.message = new FormControl('');
  }


  nouveauTopic(cours){
    let dater = new Date();
    let date = {
      years: dater.getFullYear(),
      month: dater.getMonth(),
      day: dater.getDate(),
      hours: dater.getHours(),
    }
    console.log(date)
    let user = "";
    if(this.authService.userData){
      if(this.authService.userData.displayName){
        user= this.authService.userData.displayName
      }

      else if(this.authService.userData.email){
        user =  this.authService.userData.email
      }
    }

    else{
      user = "anonyme"
    }

    let array = [];
    for (let sujet in cours.forum) {
    array.push(cours.forum[sujet])

}

    let chat = [{
      auteur: user,
      message: this.messageNewTopic.value
    }]

    array.push({
      chat: chat,
      titre: this.titreNewTopic.value,
      auteur: user,
      date: date
    })
    cours.forum = array;
    this.coursService.saveCoursToServer();
    this.creerNouveauSujet = false;
  }

  arrayForum(cours){
    let array = [];

    for (let sujet in cours.forum) {
    array.push(cours.forum[sujet])

}

    return(array)
  }

  arrayMessage(forum){
    let array = [];

    for(let message in forum.chat){
      array.push(forum.chat[message])
    }
    return array
  }

}
