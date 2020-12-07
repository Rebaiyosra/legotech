import { Component, Input, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/Services/articles.service';

@Component({
  selector: 'app-tous-categories',
  templateUrl: './tous-categories.component.html',
  styleUrls: ['./tous-categories.component.css']
})
export class TousCategoriesComponent implements OnInit {

  articles ?: any[];
  
  constructor(private articlesService:ArticlesService) { }

  ngOnInit(): void {
   this.articles= this.articlesService.onAffiche();
  }
  @Input() id!:number;
  @Input() nom!:String;
  @Input() image!:String;
  @Input() categorie!: String;
  @Input() prix!:number;
  @Input() qte!:number;
  @Input() desc!:string;
}
