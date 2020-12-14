import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/Models/Article';
import { ArticlesService } from 'src/app/Services/articles.service';

@Component({
  selector: 'app-imprimantes',
  templateUrl: './imprimantes.component.html',
  styleUrls: ['./imprimantes.component.css']
})
export class ImprimantesComponent implements OnInit {

  articles ?: any[];
  
  constructor(private articlesService:ArticlesService,private router:Router) { }

  ngOnInit(): void {
   this.articles= this.articlesService.onAffiche();
  }
  articleDetails(id:string){
    this.router.navigate(['voir',id]);
  }
  @Input() id!:number;
  @Input() libelle!:String;
  @Input() image!:String;
  @Input() categorie!: String;
  @Input() prix!:number;
  @Input() qte!:number;
  @Input() desc!:string;
}

