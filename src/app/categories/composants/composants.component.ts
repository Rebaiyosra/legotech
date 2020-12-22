import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/Models/Article';
import { ArticlesService } from 'src/app/Services/articles.service';

@Component({
  selector: 'app-composants',
  templateUrl: './composants.component.html',
  styleUrls: ['./composants.component.css']
})
export class ComposantsComponent implements OnInit {

  articles ?: any[];
  
  constructor(private articlesService:ArticlesService,private router:Router) { }

  ngOnInit(): void {
   this.articles= this.articlesService.onAffiche();
  }
  articleDetails(id:string){
    this.router.navigate(['voir',id]);
  }
  @Input() id!:number;
  @Input() nom!:String;
  @Input() image!:String;
  @Input() categorie!: String;
  @Input() prix!:number;
  @Input() qte!:number;
  @Input() desc!:string;
}
