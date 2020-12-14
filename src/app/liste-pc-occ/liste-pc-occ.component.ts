import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticlesService } from '../Services/articles.service';

@Component({
  selector: 'app-liste-pc-occ',
  templateUrl: './liste-pc-occ.component.html',
  styleUrls: ['./liste-pc-occ.component.css']
})
export class ListePcOccComponent implements OnInit {
  articles ?: any[];

   @Input() id!:number;
  @Input() nom!:String;
  @Input() image!:String;
  @Input() categorie!: String;
  @Input() prix!:number;
  @Input() qte!:number;
  @Input() desc!:string;
  constructor(private articlesService:ArticlesService,private router:Router) { }

  ngOnInit(): void {
   this.articles= this.articlesService.onAffiche();
   
    
  }
  articleDetails(id:string){
    this.router.navigate(['voir',id]);
}

 
  }
   


