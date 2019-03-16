import { Component, OnInit, Input } from '@angular/core';
import { CoursService } from 'src/services/cours.service';
import {Observable,timer} from 'rxjs';

@Component({
  selector: 'app-liste-cours',
  templateUrl: './liste-cours.component.html',
  styleUrls: ['./liste-cours.component.css']
})
export class ListeCoursComponent implements OnInit {
  
liste_cours: any[]


  


  constructor(private coursService: CoursService) { }

  ngOnInit() {

   const source=timer(1000 , 5000); 
   const subscribe=source.subscribe(
    val=> this.liste_cours = this.coursService.liste_cours
   );
       
  }

  onSave(){
    this.coursService.saveCoursToServer();
  }

  onFetch(){
  	this.coursService.getCoursFromServer();
  }

}
