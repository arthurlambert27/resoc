import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class CoursService {
  liste_cours = []

  constructor(private httpClient: HttpClient) {
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