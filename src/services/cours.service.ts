import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable()
export class CoursService {
  liste_cours = []
  items: any;

  constructor(db: AngularFireDatabase, private httpClient: HttpClient) { 
    this.items = db.list('cours').valueChanges();
    this.items.subscribe({
      next: event => this.getCoursFromServer(),
      error: err => console.log(`Oops... ${err}`),
      complete: () => console.log(`Complete!`),
    })

    
    this.getCoursFromServer()
  }

  saveCoursToServer() {
    this.httpClient
      .put("https://resoc-1f87d.firebaseio.com/cours.json", this.liste_cours)
      .subscribe(
        () => {
          console.log("Enregistrement terminé!");
        },
        error => {
          console.log("Erreur ! : " + error);
        }
      );
  }

  getCoursFromServer() {
    this.httpClient
      .get<any[]>("https://resoc-1f87d.firebaseio.com/cours.json")
      .subscribe(
        response => {
          this.liste_cours = response;
          console.log("Chargement terminé!");
        },
        error => {
          console.log("Erreur!: " + error);
        }
      );
  }
}