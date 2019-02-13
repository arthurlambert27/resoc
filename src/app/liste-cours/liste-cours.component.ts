import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-liste-cours',
  templateUrl: './liste-cours.component.html',
  styleUrls: ['./liste-cours.component.css']
})
export class ListeCoursComponent implements OnInit {
  
liste_cours = [
  {
    titre: "Fonction exponentiel",
    status: "En cours"
  },
  {
    titre: "Limite de fonction",
    status: "on"
  },
  {
    titre: "La calculatrice pour les nul",
    status: "on"
  },

]

  


  constructor() { }

  ngOnInit() {
  }

}
