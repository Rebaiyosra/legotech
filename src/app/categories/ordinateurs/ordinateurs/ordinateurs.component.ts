import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/Models/Article';
import { ArticlesService } from 'src/app/Services/articles.service';

@Component({
  selector: 'app-ordinateurs',
  templateUrl: './ordinateurs.component.html',
  styleUrls: ['./ordinateurs.component.css']
})
export class OrdinateursComponent implements OnInit {

  articles !: Article[];
  
  constructor(private articlesService:ArticlesService) { }

  ngOnInit(): void {
   /*this.articles= this.articlesService.onAffiche();*/
  }
  @Input() id!:number;
  @Input() libelle!:String;
  @Input() image!:String;
  @Input() categorie!: String;
  @Input() prix!:number;
  @Input() qte!:number;
  @Input() desc!:string;
}
