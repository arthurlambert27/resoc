import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursService } from 'src/services/cours.service';

@Component({
  selector: 'app-viewcours',
  templateUrl: './viewcours.component.html',
  styleUrls: ['./viewcours.component.css']
})
export class ViewcoursComponent implements OnInit {
  id: any;

  constructor(private route: ActivatedRoute, private coursService: CoursService) { 


  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    console.log(this.coursService.liste_cours[this.id]);
    
  }

}
