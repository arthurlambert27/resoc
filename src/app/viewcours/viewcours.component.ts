import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursService } from 'src/services/cours.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';

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

  constructor(private route: ActivatedRoute, private coursService: CoursService) { 
    

  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    /*
    
    this.cours = this.coursService.getcoursByid(+id);
    console.log(JSON.stringify( this.cours.contenu));
    */
  }

}
