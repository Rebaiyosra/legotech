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
  Articles: Article[] = [];
  nom!: string;
  id!: number;
  image!: string;
  prix!: number;
  dispo:boolean=false;
  date!: Date;
  desc!: string;
  qt!: number;

  constructor(private articlesService:ArticlesService,private router:Router) { }

  ngOnInit() {
    this.Articles=this.articlesService.lesArticles;
  }
  onAdd(f:NgForm){
    this.articlesService.addArticle(this.id,this.nom,this.image,this.prix,this.date,this.qt,this.desc,this.dispo);
  }
  onNavigate(){
    this.router.navigate(['liste-article']);
  }

}
