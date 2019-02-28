import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class CoursService{
    liste_cours = [
        {
          titre: "Fonction exponentiel",
          status: "En cours",
          contenu: [
            {
              text: "I/ exp(x)",
              class: "titre"
            },
                  { text: "Sed fruatur sane hoc solacio atque hanc insignem ignominiam, quoniam uni praeter se inusta sit, putet esse leviorem, dum modo, cuius exemplo se consolatur, eius exitum expectet, praesertim cum in Albucio nec Pisonis libidines nec audacia Gabini fuerit ac tamen hac una plaga conciderit, ignominia senatus.",
                    class: "paragraphe"},
                  {
                    text: "Nemo quaeso miretur, si post exsudatos labores itinerum longos congestosque adfatim commeatus fiducia vestri ductante barbaricos pagos adventans velut mutato repente consilio ad placidiora deverti.",
                    titre: "paragraphe"
                  }
          ]
        },
        {
          titre: "Limite de fonction",
          status: "on",
          contenu: [
            {
              text: "I/ Limite",
              class: "titre"
            },
                  { text: "Sed fruatur sane hoc solacio atque hanc insignem ignominiam, quoniam uni praeter se inusta sit, putet esse leviorem, dum modo, cuius exemplo se consolatur, eius exitum expectet, praesertim cum in Albucio nec Pisonis libidines nec audacia Gabini fuerit ac tamen hac una plaga conciderit, ignominia senatus.",
                    class: "paragraphe"},
                    {
                        class: "image",
                        lien: "http://www.orseu-concours.com/206-343-thickbox/epso-numerical-reasoning-test-3-en.jpg"
                    },
                  {
                    text: "Nemo quaeso miretur, si post exsudatos labores itinerum longos congestosque adfatim commeatus fiducia vestri ductante barbaricos pagos adventans velut mutato repente consilio ad placidiora deverti.",
                    titre: "paragraphe"
                  }
          ]
        },
        {
          titre: "La calculatrice pour les nul",
          status: "on",
          contenu: [
            {
              text: "I/ Calculer pour les nuls",
              class: "titre"
            },
                  { text: "Sed fruatur sane hoc solacio atque hanc insignem ignominiam, quoniam uni praeter se inusta sit, putet esse leviorem, dum modo, cuius exemplo se consolatur, eius exitum expectet, praesertim cum in Albucio nec Pisonis libidines nec audacia Gabini fuerit ac tamen hac una plaga conciderit, ignominia senatus.",
                    class: "paragraphe"},
                  {
                    text: "Nemo quaeso miretur, si post exsudatos labores itinerum longos congestosque adfatim commeatus fiducia vestri ductante barbaricos pagos adventans velut mutato repente consilio ad placidiora deverti.",
                    titre: "paragraphe"
                  }
          ]
        },
      
      ]

    constructor(private httpClient: HttpClient){

    }

    saveCoursToServer(){
      this.httpClient
        .put('https://resoc-1f87d.firebaseio.com/cours.json', this.liste_cours)
        .subscribe(
          () =>{
            console.log("Enregistrement terminé!");
          },
          (error) =>{
            console.log('Erreur ! : ' + error);
          }
         );
    }

    getCoursFromServer(){
      this.httpClient
      .get<any[]>('https://resoc-1f87d.firebaseio.com/cours.json')
      .subscribe(
        (response) => {
          this.liste_cours = response;
          console.log("Chargement terminé!")
          
        },
          (error) =>{
            console.log('Erreur!: ' + error);
          }
        );
    }
}