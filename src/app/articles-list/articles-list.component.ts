import { Component, OnInit ,Input} from '@angular/core';
import { AccesoireInfo } from '../Models/AccessoireInfo';
import { Article } from '../Models/Article';
import { ArticlesService } from '../Services/articles.service';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {

  articles ?: any[];
  
  constructor(private articlesService:ArticlesService) { }

  ngOnInit(): void {
   this.articles= this.articlesService.onAffiche();
  }
  @Input() id!:string;
  @Input() nom!:String;
  @Input() image!:String;
  @Input() type!:string;
  @Input() prix!:number;
  @Input() qte!:number;
  @Input() desc!:string;
  @Input() marque!:string;
}
