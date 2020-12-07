import { Component, OnInit } from '@angular/core';
import {ArticlesService} from '../Services/articles.service';
import {Article} from '../Models/Article';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ajouter-article',
  templateUrl: './ajouter-article.component.html',
  styleUrls: ['./ajouter-article.component.css']
})
export class AjouterArticleComponent implements OnInit {
  
  nom!: string;
  id!: string;
  img!: string;
  prix!: number;
  type?:string;
  frequence?:string;
  stockage?:number;
  wattage?:number;
  ddr?:string
  desc!: string;
  qt!: number;
  art?:string;
  typeRam?:string;
  tailleRam?:number;
  carteGraphique?:string
  processeur?:string;
  typeDisque?:string;
  tailleDisque?:number;
  tailleCarteGraphique?:string;
  tailleEcran?:number;
  ddrCarte?:string;
  formatCarte?:string;
  wattageCarte?:number;
  slotRam?:number;
  capacite?:number;
  typeDisqueDur?:number;
  formatBoitier?:string;
  constructor(private articlesService:ArticlesService,private router:Router) { }

  ngOnInit() {
   /* this.Articles=this.articlesService.lesAcc;*/
  
  }/*
  onAdd(f:NgForm){
    this.articlesService.addArticle(this.id,this.nom,this.prix,this.desc,this.categorie,this.qt,this.image,this.dispo);
  }*/
  onNavigate(){
    this.router.navigate(['liste-article']);
  }

}
