import { Component, OnInit, Input } from '@angular/core';
import { CoursService } from 'src/services/cours.service';

@Component({
  selector: 'app-liste-cours',
  templateUrl: './liste-cours.component.html',
  styleUrls: ['./liste-cours.component.css']
})
export class ListeCoursComponent implements OnInit {
  



  


  constructor(private coursService: CoursService) { }

  ngOnInit() {
    
  }

  onSave(){
    this.coursService.saveCoursToServer();
  }

  onFetch(){
  	this.coursService.getCoursFromServer();
  }

}
