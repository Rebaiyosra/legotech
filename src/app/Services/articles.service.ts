import { Injectable } from '@angular/core';


import { AccesoireInfo } from '../Models/AccessoireInfo';
import {Article} from '../Models/Article';
import { Pc } from '../Models/Pc';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  lesAcc= [
  
    {
      id:"s11",
      nom:"souris",
      prix:6.500,
      image:'../../assets/souris.jpg',
      desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed luctus ex.Donec eu aliquam augue. Nunc eros ipsum, ultricies ut facilisis at, faucibus ac mi.",
      qte:10,
      marque:"Macro",
      type:"accessoires",
      typeAcc:"souris"
    },
    {
      id:"a11",
      nom:"imprimante",
      prix:160,
      image:'../../assets/imprimante.jpg',
      desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed luctus ex.Donec eu aliquam augue. Nunc eros ipsum, ultricies ut facilisis at, faucibus ac mi.",
      qte:10,
      marque:"Macro",
      type:"accessoires",
      typeAcc:"imprimantes"
    },
    {
      id:"a12",
      nom:"clavier",
      prix:26.500,
      image:'../../assets/clavier.jpg',
      desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed luctus ex.Donec eu aliquam augue. Nunc eros ipsum, ultricies ut facilisis at, faucibus ac mi.",
      qte:10,
      marque:"Rampage",
      type:"accessoires",
      typeAcc:"clavier"
    },
    {
      id:"a13",
      nom:"haut parleur",
      prix:55.000,
      image:'../../assets/haut_parleur.jpg',
      desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed luctus ex.Donec eu aliquam augue. Nunc eros ipsum, ultricies ut facilisis at, faucibus ac mi.",
      qte:10,
      marque:"ADVANCE",
      type:"accessoires",
      typeAcc:"haut parleur"
    },
    {
      id:"a14",
      nom:"Mini Lecteur De Cartes USB S-Link CR43",
      prix:2.500,
      image:'../../assets/usb.jpg',
      desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed luctus ex.Donec eu aliquam augue. Nunc eros ipsum, ultricies ut facilisis at, faucibus ac mi.",
      qte:10,
      marque:"S-Link",
      type:"accessoires",
      typeAcc:"USB"
    },
    {
      id:"care122",
      nom:"Mini Lecteur De Cartes USB S-Link CR43",
      prix:2.500,
      image:'../../assets/usb.jpg',
      desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed luctus ex.Donec eu aliquam augue. Nunc eros ipsum, ultricies ut facilisis at, faucibus ac mi.",
      qte:10,
      marque:"S-Link",
      type:"carte graphique",
      typeAcc:"USB"
    },
    {
      id:"Procc22",
      nom:"Processeur",
      prix:2.500,
      image:'../../assets/usb.jpg',
      desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed luctus ex.Donec eu aliquam augue. Nunc eros ipsum, ultricies ut facilisis at, faucibus ac mi.",
      qte:10,
      marque:"S-Link",
      type:"processeur",
    
    },
    {
      id:"Ram",
      nom:"ram",
      prix:2.500,
      image:'../../assets/usb.jpg',
      desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed luctus ex.Donec eu aliquam augue. Nunc eros ipsum, ultricies ut facilisis at, faucibus ac mi.",
      qte:10,
      marque:"S-Link",
      type:"ram",
      frequence:"aa",
      stockage:22,
      ddr:"ddr3"
    },
    

    {
      id:"dis14",
      nom:"Mini Lecteur De Cartes USB S-Link CR43",
      prix:2.500,
      image:'../../assets/usb.jpg',
      desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed luctus ex.Donec eu aliquam augue. Nunc eros ipsum, ultricies ut facilisis at, faucibus ac mi.",
      qte:10,
      marque:"S-Link",
      type:"disque dur",
      typeDisque:"lorem",
      capacite:555
    },
    {
      id:"pc11",
      nom:"Pc ASUS",
      prix:1650,
      image:'../../assets/asus.jpg',
      desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed luctus ex.Donec eu aliquam augue. Nunc eros ipsum, ultricies ut facilisis at, faucibus ac mi.",
      qte:10,
      marque:"ASUS",
      type:"Pc",
      etat:"nouveau",
      typeRam:"ram 1",
      tailleRam:8,
      carteGraph:"carte graphique 1",
      processeur:"processeur",
      typeDis:"ddr3",
      tailleDis:8,
      tailleCarteGraph:"taille carte graphique",
      tailleEcran:12

    },
    {
      id:"pc12",
      nom:"Pc DELL",
      prix:1250,
      image:'../../assets/dell.jpg',
      desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed luctus ex.Donec eu aliquam augue. Nunc eros ipsum, ultricies ut facilisis at, faucibus ac mi.",
      qte:0,
      marque:"DELL",
      type:"Pc",
      etat:"occassion",
      typeRam:"ram 1",
      tailleRam:8,
      carteGraph:"carte graphique 1",
      processeur:"Intel Celeron N4000 Dual-Core (1.10 GHz Up To 2.60 GHz)",
      typeDis:"ddr3",
      tailleDis:8,
      tailleCarteGraph:"taille carte graphique",
      tailleEcran:12

    },
    {
      id:"pc13",
      nom:"Pc HP",
      prix:1400,
      image:'../../assets/hp.jpg',
      desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed luctus ex.Donec eu aliquam augue. Nunc eros ipsum, ultricies ut facilisis at, faucibus ac mi.",
      qte:10,
      marque:"HP",
      type:"Pc",
      etat:"occassion",
      typeRam:"ram 1",
      tailleRam:8,
      carteGraph:"carte graphique 1",
      processeur:" Intel Celeron N4000 Dual-Core (1.10 GHz Up To 2.60 GHz)",
      typeDis:"ddr3",
      tailleDis:8,
      tailleCarteGraph:"taille carte graphique",
      tailleEcran:12

    },
   {
    id:"b11",
    nom:"BlocAlimentation 1",
    prix:6.500,
    image:'../../assets/souris.jpg',
    desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed luctus ex.Donec eu aliquam augue. Nunc eros ipsum, ultricies ut facilisis at, faucibus ac mi.",
    qte:10,
    marque:"Macro",
    type:"bloc alimentation",
    wattage:1000
   },
   {
    id:"b12",
    nom:"BlocAlimentation 2",
    prix:6.500,
    image:'../../assets/souris.jpg',
    desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed luctus ex.Donec eu aliquam augue. Nunc eros ipsum, ultricies ut facilisis at, faucibus ac mi.",
    qte:10,
    marque:"Macro",
    type:"bloc alimentation",
    wattage:2000
   },
   {  
    id:"bo11",
    nom:"boitier 1",
    prix:6.500,
    image:'../../assets/souris.jpg',
    desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed luctus ex.Donec eu aliquam augue. Nunc eros ipsum, ultricies ut facilisis at, faucibus ac mi.",
    qte:10,
    marque:"Macro",
    type:"boitier",
    formatBoitier:"format 1"
   },
   {
    id:"cm11",
    nom:"CarteMere 1",
    prix:6.500,
    image:'../../assets/souris.jpg',
    desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed luctus ex.Donec eu aliquam augue. Nunc eros ipsum, ultricies ut facilisis at, faucibus ac mi.",
    qte:10,
    marque:"Macro",
    type:"Carte mère",
    ddrCarte:"ddr3",
    formatCarte:"format 1",
    wattageCarte:12,
    slotRam:12
   }
  ]
 types:string[]=[];
 acc:any[]=[];

  onAffiche(){
    return this.lesAcc;
  }

   /* var result = this.lesAcc.find(obj => {
      return obj.type === "accessoires"
    });
    return result;*/

 onRemplir()
 {  this.types=[]
 
   for(let i=0;i<this.lesAcc.length;i++)
   { 
    
    this.types.push(this.lesAcc[i].type);
    
   }
   this.types = [...new Set(this.types)];
   return this.types;
 
 }
 
  public getProduitById(id:string){
    for (let i=0;i<this.lesAcc.length;i++)
    {
      if(this.lesAcc[i].id==id)
      return this.lesAcc[i];
    }
    
    return null as any;

 }
 
 public onGetArticle(id:string){
   return this.lesAcc.find(x=>x.id===id);
 }
 public supprimer(ref:string){
  for (let i=0;i<this.lesAcc.length;i++){
  if(ref==this.lesAcc[i].id)
     this.lesAcc.splice(i,1);
   }
     return this.lesAcc;
    
    
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
