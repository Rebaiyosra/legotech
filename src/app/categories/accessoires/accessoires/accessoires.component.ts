import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/Models/Article';
import { ArticlesService } from 'src/app/Services/articles.service';

@Component({
  selector: 'app-accessoires',
  templateUrl: './accessoires.component.html',
  styleUrls: ['./accessoires.component.css']
})
export class AccessoiresComponent implements OnInit {

  articles !: Article[];
  
  constructor(private articlesService:ArticlesService) { }

  ngOnInit(): void {
  /* this.articles= this.articlesService.onAffiche();*/
  }
  @Input() id!:number;
  @Input() nom!:String;
  @Input() image!:String;
  @Input() categorie!: String;
  @Input() prix!:number;
  @Input() qte!:number;
  @Input() desc!:string;
}
