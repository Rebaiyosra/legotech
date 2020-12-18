import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../Services/articles.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private articlesService:ArticlesService) { }
  cardItem:any[]=[];
  Total=0;
 
  Livraison=7;
  gouvernorat="Gouvernorat";
  name?:string;
  prenom?:string;
  mdp?:string;
  mail?:string;
  numTel?:string;
  adresse?:string;
  ville?:string;
  codeP?:string;
  cin?:string;
  code?:number;
  numCard?:number;
  ngOnInit(): void {
    this.cardItem=this.articlesService.onAfficheCard();
    for(let i=0;i<this.cardItem.length;i++)
    {
      this.Total+=this.cardItem[i].prix*this.cardItem[i].qte;
     
    }
    
  }
  prixTot=this.Total+this.Livraison;
}
