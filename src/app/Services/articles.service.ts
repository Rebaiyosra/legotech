import { Injectable } from '@angular/core';
import {Article} from '../Models/Article';
@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  lesArticles= [
    new Article(
      1,
      "pc Dell",
      1200,
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed luctus ex.Donec eu aliquam augue. Nunc eros ipsum, ultricies ut facilisis at, faucibus ac mi.",
      10,
      "../assets/dell.jpg",
      true
    ),
    new Article(
      2,
      "Souris",
      12,
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed luctus ex.Donec eu aliquam augue. Nunc eros ipsum, ultricies ut facilisis at, faucibus ac mi.",
      10,
      "../assets/digital.jpg",
      true
    ),
  ]
  constructor() { }
  onAffiche(){
    return this.lesArticles;
  }
  public getProduitById(id:number){
    for (let i=0;i<this.lesArticles.length;i++)
    {
      if(this.lesArticles[i].id===id)
      return this.lesArticles[i];
    }
    
    return null;

 }
 public addArticle(id: number,libelle: string,image: string,prix: number, date: Date,qt: number,desc: string,dispo:boolean){
   if(this.getProduitById(id)==null)
   {
     let A=new Article(id,libelle,prix,desc,qt,image,dispo)
     this.lesArticles.push(A);
     return true;
   }
   return false;
 }
 public supprimer(ref:number){
   for (let i=0;i<this.lesArticles.length;i++){
   if(ref==this.lesArticles[i].id)
      this.lesArticles.splice(i,1);
    }
      return this.lesArticles;
     
     
   }
  
  
   
   /*
 public modifier(id: number,libelle: string,image: string,prix: number, date: Date,qt: number,desc: string,dispo:boolean){
  let A:Article=this.getProduitById(id);
  A.libelle=libelle;
  A.image=image;
  A.prix=prix;
  A.qte=qt;
  A.desc=desc;
 A.dispo=dispo;
 if(A.qte===0){
   A.dispo=false;
 }
 }*/
}
