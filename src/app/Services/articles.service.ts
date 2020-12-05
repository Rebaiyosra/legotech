import { Injectable } from '@angular/core';
import { AccesoireInfo } from '../Models/AccessoireInfo';
import {Article} from '../Models/Article';
import { BlocAlimentation } from '../Models/BlocAlimentation';
import { Boitier } from '../Models/Boitier';
import { CarteGraphique } from '../Models/CarteGraphique';
import { CarteMere } from '../Models/CarteMere';
import { DisqueDure } from '../Models/DisqueDure';
import { Pc } from '../Models/Pc';
@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  AccesoireInfos= [
  
    new AccesoireInfo(
      "a11",
      "souris",
      6.500,
      '../../assets/souris.jpg',
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed luctus ex.Donec eu aliquam augue. Nunc eros ipsum, ultricies ut facilisis at, faucibus ac mi.",
      10,
      "Macro",
      "accessoires",
      "souris"
    ),
    new AccesoireInfo(
      "a12",
      "clavier",
      26.500,
      '../../assets/clavier.jpg',
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed luctus ex.Donec eu aliquam augue. Nunc eros ipsum, ultricies ut facilisis at, faucibus ac mi.",
      10,
      "Rampage",
      "accessoires",
      "clavier"
    ),
    new AccesoireInfo(
      "a13",
      "haut parleur",
      55.000,
      '../../assets/haut_parleur.jpg',
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed luctus ex.Donec eu aliquam augue. Nunc eros ipsum, ultricies ut facilisis at, faucibus ac mi.",
      10,
      "ADVANCE",
      "accessoires",
      "haut parleur"
    ),
    new AccesoireInfo(
      "a14",
      "Mini Lecteur De Cartes USB S-Link CR43",
      2.500,
      '../../assets/usb.jpg',
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed luctus ex.Donec eu aliquam augue. Nunc eros ipsum, ultricies ut facilisis at, faucibus ac mi.",
      10,
      "S-Link",
      "accessoires",
      "USB"
    ),
    new AccesoireInfo(
      "a15",
      "Adaptateur OTG Lecteur De Cartes Vers Micro USB",
      7.000,
      '../../assets/adaptateur.jpg',
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed luctus ex.Donec eu aliquam augue. Nunc eros ipsum, ultricies ut facilisis at, faucibus ac mi.",
      10,
      "S-Link",
      "accessoires",
      "USB"
    ),
    new AccesoireInfo(
      "a16",
      "Perche Télescopique Selfie Avec Bouton Intégré Violet",
      5.000,
      '../../assets/perche.jpg',
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed luctus ex.Donec eu aliquam augue. Nunc eros ipsum, ultricies ut facilisis at, faucibus ac mi.",
      10,
      "ADVANCE",
      "accessoires",
      "perche"
    ),
  ]

  onAfficheAccesoireInfos(){
    return this.AccesoireInfos;
  }
  public getProduitByIdAccesoireInfos(id:string){
    for (let i=0;i<this.AccesoireInfos.length;i++)
    {
      if(this.AccesoireInfos[i]._id==id)
      return this.AccesoireInfos[i];
    }
    
    return null as any;
  }
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
  BlocAlimentations= [
  
    new BlocAlimentation(
      "b11",
      "BlocAlimentation 1",
      6.500,
      '../../assets/souris.jpg',
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed luctus ex.Donec eu aliquam augue. Nunc eros ipsum, ultricies ut facilisis at, faucibus ac mi.",
      10,
      "Macro",
      "bloc alimentation",
      1000
    ),
    new BlocAlimentation(
      "b12",
      "BlocAlimentation 2",
      26.500,
      '../../assets/clavier.jpg',
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed luctus ex.Donec eu aliquam augue. Nunc eros ipsum, ultricies ut facilisis at, faucibus ac mi.",
      10,
      "Rampage",
      "bloc alimentation",
      2000
    )
  ]

  onAfficheBlocAlimentations(){
    return this.BlocAlimentations;
  }
  public getProduitByIdBlocAlimentations(id:string){
    for (let i=0;i<this.BlocAlimentations.length;i++)
    {
      if(this.BlocAlimentations[i]._id==id)
      return this.BlocAlimentations[i];
    }
    
    return null as any;
  }
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
  
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
  Boitiers= [
  
    new Boitier(
      "bo11",
      "boitier 1",
      6.500,
      '../../assets/souris.jpg',
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed luctus ex.Donec eu aliquam augue. Nunc eros ipsum, ultricies ut facilisis at, faucibus ac mi.",
      10,
      "Macro",
      "boitier",
      "format 1"
    ),
    new Boitier(
      "bo12",
      "boitier 2",
      26.500,
      '../../assets/clavier.jpg',
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed luctus ex.Donec eu aliquam augue. Nunc eros ipsum, ultricies ut facilisis at, faucibus ac mi.",
      10,
      "Rampage",
      "boitier",
      "format 2"
    )
  ]

  onAfficheBoitiers(){
    return this.Boitiers;
  }
  public getProduitByIdBoitiers(id:string){
    for (let i=0;i<this.Boitiers.length;i++)
    {
      if(this.Boitiers[i]._id==id)
      return this.Boitiers[i];
    }
    
    return null as any;
  }
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
  CarteMeres= [
  
    new CarteMere(
      "cm11",
      "CarteMere 1",
      6.500,
      '../../assets/souris.jpg',
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed luctus ex.Donec eu aliquam augue. Nunc eros ipsum, ultricies ut facilisis at, faucibus ac mi.",
      10,
      "Macro",
      "CarteMere",
      "ddr3",
      "format 1",
      12,
      12

    ),
    new CarteMere(
      "cm12",
      "CarteMere 2",
      26.500,
      '../../assets/clavier.jpg',
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed luctus ex.Donec eu aliquam augue. Nunc eros ipsum, ultricies ut facilisis at, faucibus ac mi.",
      10,
      "Rampage",
      "CarteMere",
      "ddr4",
      "format 2",
      12,
      12
    )
  ]

  onAfficheCarteMeres(){
    return this.CarteMeres;
  }
  public getProduitByIdCarteMeres(id:string){
    for (let i=0;i<this.CarteMeres.length;i++)
    {
      if(this.CarteMeres[i]._id==id)
      return this.CarteMeres[i];
    }
    
    return null as any;
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
  CarteGraphiques= [
  
    new CarteGraphique(
      "cg11",
      "CarteGraphique 1",
      6.500,
      '../../assets/souris.jpg',
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed luctus ex.Donec eu aliquam augue. Nunc eros ipsum, ultricies ut facilisis at, faucibus ac mi.",
      10,
      "Macro",
      "CarteGraphique"
    ),
    new CarteGraphique(
      "cg12",
      "CarteGraphique 2",
      26.500,
      '../../assets/clavier.jpg',
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed luctus ex.Donec eu aliquam augue. Nunc eros ipsum, ultricies ut facilisis at, faucibus ac mi.",
      10,
      "Rampage",
      "CarteGraphique"
    )
  ]

  onAfficheCarteGraphiques(){
    return this.CarteGraphiques;
  }
  public getProduitByIdCarteGraphiques(id:string){
    for (let i=0;i<this.CarteGraphiques.length;i++)
    {
      if(this.CarteGraphiques[i]._id==id)
      return this.CarteGraphiques[i];
    }
    
    return null as any;
  }

////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
DisqueDures= [
  
  new DisqueDure(
    "dd11",
    "DisqueDure 1",
    6.500,
    '../../assets/souris.jpg',
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed luctus ex.Donec eu aliquam augue. Nunc eros ipsum, ultricies ut facilisis at, faucibus ac mi.",
    10,
    "Macro",
    "DisqueDure",
    12,
    12
  ),
  new DisqueDure(
    "dd12",
    "DisqueDure 2",
    26.500,
    '../../assets/clavier.jpg',
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed luctus ex.Donec eu aliquam augue. Nunc eros ipsum, ultricies ut facilisis at, faucibus ac mi.",
    10,
    "Rampage",
    "DisqueDure",
    12,
    12
  )
]

onAfficheDisqueDures(){
  return this.DisqueDures;
}
public getProduitByIdDisqueDures(id:string){
  for (let i=0;i<this.DisqueDures.length;i++)
  {
    if(this.DisqueDures[i]._id==id)
    return this.DisqueDures[i];
  }
  
  return null as any;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
Pcs= [
  
  new Pc(
    "pc11",
    "Pc ASUS",
    1650,
    '../../assets/asus.jpg',
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed luctus ex.Donec eu aliquam augue. Nunc eros ipsum, ultricies ut facilisis at, faucibus ac mi.",
    10,
    "ASUS",
    "Pc",
    "etat 1",
    "ram 1",
    8,
    "carte graphique 1",
    "processeur",
    "ddr3",
    8,
    "taille carte graphique",
    12
  ),
  new Pc(
    "pc12",
    "Pc DELL",
    1250,
    '../../assets/dell.jpg',
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed luctus ex.Donec eu aliquam augue. Nunc eros ipsum, ultricies ut facilisis at, faucibus ac mi.",
    10,
    "Rampage",
    "DELL",
    "etat 2",
    "ram 2",
    8,
    "carte graphique 2",
    "processeur",
    "ddr4",
    8,
    "taille carte graphique",
    12
  ),
  new Pc(
    "pc13",
    "Pc HP",
    1400,
    '../../assets/asus.jpg',
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed luctus ex.Donec eu aliquam augue. Nunc eros ipsum, ultricies ut facilisis at, faucibus ac mi.",
    10,
    "HP",
    "Pc",
    "etat 1",
    "ram 3",
    8,
    "carte graphique 3",
    "processeur",
    "ddr4",
    8,
    "taille carte graphique",
    12
  ),
]

onAffichePcs(){
  return this.Pcs;
}
public getProduitByIdPcs(id:string){
  for (let i=0;i<this.Pcs.length;i++)
  {
    if(this.Pcs[i]._id==id)
    return this.Pcs[i];
  }
  
  return null as any;
}




  /*
 public addArticle(id: number,nom: string,prix: number,desc: string, categorie: string,qt: number,image: string,dispo: boolean){
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

  constructor() { }*/
}
