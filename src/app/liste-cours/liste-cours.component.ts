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
    status: "En cours",
    contenu: [
      {
        text: "I/ exp(x)",
        class: "titre"
      },
            { text: "Sed fruatur sane hoc solacio atque hanc insignem ignominiam, quoniam uni praeter se inusta sit, putet esse leviorem, dum modo, cuius exemplo se consolatur, eius exitum expectet, praesertim cum in Albucio nec Pisonis libidines nec audacia Gabini fuerit ac tamen hac una plaga conciderit, ignominia senatus.",
              style: "paragraphe"},
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
              style: "paragraphe"},
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
              style: "paragraphe"},
            {
              text: "Nemo quaeso miretur, si post exsudatos labores itinerum longos congestosque adfatim commeatus fiducia vestri ductante barbaricos pagos adventans velut mutato repente consilio ad placidiora deverti.",
              titre: "paragraphe"
            }
    ]
  },

]


  


  constructor() { }

  ngOnInit() {
    
  }

}
