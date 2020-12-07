import { Component, OnInit ,Input} from '@angular/core';
import { AccesoireInfo } from '../Models/AccessoireInfo';
import { Article } from '../Models/Article';
import { Pc } from '../Models/Pc';
import { ArticlesService } from '../Services/articles.service';

@Component({
  selector: 'app-acceuil-utilisateur',
  templateUrl: './acceuil-utilisateur.component.html',
  styleUrls: ['./acceuil-utilisateur.component.css']
})
export class AcceuilUtilisateurComponent implements OnInit {

  articles ?: any[];
  
  
  constructor(private articlesService:ArticlesService) { }

  slidesart: any = [[]];
  chunk(arr: any, chunkSize: any) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }
  ngOnInit(): void {
   this.articles= this.articlesService.onAffiche();
   this.slidesart = this.chunk(this.articles, 3);
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
