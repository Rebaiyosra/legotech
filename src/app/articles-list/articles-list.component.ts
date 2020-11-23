import { Component, OnInit ,Input} from '@angular/core';
import { Article } from '../Models/Article';
import { ArticlesService } from '../Services/articles.service';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {

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
