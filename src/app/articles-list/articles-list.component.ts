import { Component, OnInit ,Input} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import { AccesoireInfo } from '../Models/AccessoireInfo';
import { Article } from '../Models/Article';
import { Pc } from '../Models/Pc';
import { ArticlesService } from '../Services/articles.service';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {
 
  acc !:any [];
  

 types:string[]=[];
 art?:string;
 
 
  constructor(private articlesService:ArticlesService,private activatedRoute:ActivatedRoute,private router:Router) { }
 
 
  ngOnInit(): void {
   this.acc= this.articlesService.onAffiche();
   this.types=this.articlesService.onRemplir();
   this.art=this.types[0];
  }
 
  articleDetails(id:string){
      this.router.navigate(['detail-article',id]);
  }
  articleModifier(id:string){
    this.router.navigate(['modifier-article',id]);
  }
  @Input() id!:string;
  @Input() nom!:String;
  @Input() image!:String;
  @Input() type!:string;
  @Input() prix!:number;
  @Input() qte!:number;
  @Input() desc!:string;
  @Input() marque!:string;
  @Input() Etat!:string;
  @Input() typeRam!:string;
  @Input() tailleRam!:number;
  @Input() carteGraphique!: string;
  @Input() proccesseur!:string;
  @Input() typeDisque!:string;
  @Input() tailleDisque!:number;
  @Input() tailleCarteGraph!:string;
  @Input() tailleEcran!:string;
  onSupp(id:string){
    this.articlesService.supprimer(id);
  }
  
}

