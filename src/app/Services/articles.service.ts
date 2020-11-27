import { Injectable } from '@angular/core';
import {Article} from '../Models/Article';
@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  lesArticles= [
    new Article(
      "1e",
      "pc Dell",
      1200,
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed luctus ex.Donec eu aliquam augue. Nunc eros ipsum, ultricies ut facilisis at, faucibus ac mi.",
      "ordinateurs",
      10,
      '../../assets/dell.jpg',
      true
    ),
    new Article(
      "2vgf",
      "Souris",
      12,
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed luctus ex.Donec eu aliquam augue. Nunc eros ipsum, ultricies ut facilisis at, faucibus ac mi.",
      "accessoires",
      10,
      '../../assets/souris.jpg',
      true
    ),
    new Article(
      "andk",
      "imprimante",
      12,
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed luctus ex.Donec eu aliquam augue. Nunc eros ipsum, ultricies ut facilisis at, faucibus ac mi.",
      "imprimantes",
      1000,
      '../../assets/imprimante.jpg',
      false
    ),
    new Article(
      "124dhm",
      "casque micro",
      12,
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed luctus ex.Donec eu aliquam augue. Nunc eros ipsum, ultricies ut facilisis at, faucibus ac mi.",
      "accessoires",
      250,
      '../../assets/micro-casque.jpg',
      true
    ),
  ]

  onAffiche(){
    return this.lesArticles;
  }
  public getProduitById(id:string){
    for (let i=0;i<this.lesArticles.length;i++)
    {
      if(this.lesArticles[i].id==id)
      return this.lesArticles[i];
    }
    
    return null as any;

 }
 public addArticle(id: string,nom: string,prix: number,desc: string, categorie: string,qt: number,image: string,dispo: boolean){
   if(this.getProduitById(id)==null)
   {
     let A=new Article(id,nom,prix,desc,categorie,qt,image,dispo)
     this.lesArticles.push(A);
     return true;
   }
   return false;
 }
 public supprimer(ref:string){
   for (let i=0;i<this.lesArticles.length;i++){
   if(ref==this.lesArticles[i].id)
      this.lesArticles.splice(i,1);
    }
      return this.lesArticles;
     
     
   }
  
  
   
 
 public modifier(id: string,nom: string,prix: number,desc: string, categorie: string,qt: number,image: string,dispo: boolean){
  let A:Article=this.getProduitById(id);
  A.nom=nom;
  A.image=image;
  A.prix=prix;
  A.dispo=dispo;
  A.categorie=categorie;
  A.qt=qt;
  A.desc=desc;
  if(A.qt>0){
    A.dispo=true;
  }
 }

  constructor() { }
}
