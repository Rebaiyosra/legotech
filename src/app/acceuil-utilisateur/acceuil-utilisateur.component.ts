import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../Models/Article';
import { ArticlesService } from '../Services/articles.service';

@Component({
  selector: 'app-acceuil-utilisateur',
  templateUrl: './acceuil-utilisateur.component.html',
  styleUrls: ['./acceuil-utilisateur.component.css']
})
export class AcceuilUtilisateurComponent implements OnInit {

  articles !: Article[];

  constructor(private articlesService:ArticlesService) { }

  ngOnInit(): void {
    this.articles= this.articlesService.onAffiche();
  }
  @Input() id!:number;
  @Input() libelle!:String;
  @Input() image!:String;
  @Input() 
  @Input() prix!:number;
  @Input() qte!:number;
  @Input() desc!:string;
}