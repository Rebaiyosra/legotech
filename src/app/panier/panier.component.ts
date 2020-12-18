import { Component, OnInit } from '@angular/core';
import { Pc } from '../Models/Pc';
import { ArticlesService } from '../Services/articles.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  constructor(private articlesService:ArticlesService) { }
  cardItem:any[]=[];
  Total=0;
  ngOnInit(): void {
    this.cardItem=this.articlesService.onAfficheCard();
    for(let i=0;i<this.cardItem.length;i++)
    {
      this.Total+=this.cardItem[i].prix*this.cardItem[i].qte;
    }
  }

  
}
