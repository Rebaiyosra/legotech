import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticlesService } from '../Services/articles.service';

@Component({
  selector: 'app-voir-details',
  templateUrl: './voir-details.component.html',
  styleUrls: ['./voir-details.component.css']
})
export class VoirDetailsComponent implements OnInit {

  lesArticles?:any[];
  identifiant?:string;
  types:string[]=[];

  
  
 
  constructor(private articlesService:ArticlesService,private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.lesArticles=this.articlesService.lesAcc;
    this.identifiant = this.activatedRoute.snapshot.params['id'];
    
    
 
  }
 
}
