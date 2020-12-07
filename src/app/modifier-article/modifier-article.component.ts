import { Component, OnInit } from '@angular/core';
import {ArticlesService} from '../Services/articles.service';

import {Router, ActivatedRoute} from '@angular/router';

import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import { Input } from '@angular/core';
@Component({
  selector: 'app-modifier-article',
  templateUrl: './modifier-article.component.html',
  styleUrls: ['./modifier-article.component.css']
})
export class ModifierArticleComponent implements OnInit {
  
  modifForm?: FormGroup;
  lesArticles?:any;
  identifiant?:string="";

  @Input() typeAcc?:string="";
  @Input() frequence?:string="";
  @Input() stockage?:number=0;
  @Input() wattage?:number=0;
  @Input() ddr?:string="";
 

  @Input() art?:string="";
 
  @Input() ddrCarte?:string="";
  @Input() formatCarte?:string="";
  @Input() wattageCarte?:number=0;
  @Input() slotRam?:number=0;
  @Input() capacite?:number=0;
  @Input() typeDisque?:number=0;
  @Input() formatBoitier?:string="";
  @Input() id?:string="";
  @Input() nom?:String="";
  @Input() image?:String="";
  @Input() type?:string="";
  @Input() prix?:number=0;
  @Input() qte?:number=0;
  @Input() desc?:string="";
  @Input() marque?:string="";
  @Input() Etat?:string="";
  @Input() typeRam?:string="";
  @Input() tailleRam?:number=0;
  @Input() carteGraph?: string="";
  @Input() proccesseur?:string="";
  @Input() typeDis?:string="";
  @Input() tailleDis?:number=0;
  @Input() tailleCarteGraph?:string="";
  @Input() tailleEcran?:string="";
      /*

  onChange(valeur:string="")
    {
    
    let A:Article=this.articlesService.getProduitById(valeur);
    this.modifForm.get('nom')?.setValue(A.nom);
    this.modifForm.get('image')?.setValue(A.image);
    this.modifForm.get('prix')?.setValue(A.prix);
    this.modifForm.get('dispo')?.setValue(A.dispo);
    this.modifForm.get('categorie')?.setValue(A.categorie);
    this.modifForm.get('qt')?.setValue(A.qt);
    this.modifForm.get('desc')?.setValue(A.desc);
  }
    
  modif()
  {
  

    this.articlesService.modifier(
    this.modifForm.get('nom')?.value,
    this.modifForm.get('id')?.value,
    this.modifForm.get('image')?.value,
    this.modifForm.get('prix')?.value,
    this.modifForm.get('dispo')?.value,
    this.modifForm.get('categorie')?.value,
    this.modifForm.get('qt')?.value,
    this.modifForm.get('desc')?.value
    )
    this.router.navigate(['liste-article']);

  }*/

  
  constructor(private articlesService:ArticlesService,private router:Router,private formBuilder:FormBuilder,private activatedRoute:ActivatedRoute) { }
  
  ngOnInit() {
    this.lesArticles=this.articlesService.lesAcc;
    this.identifiant = this.activatedRoute.snapshot.params['id'];

    if(this.identifiant){
      this.lesArticles=this.articlesService.getProduitById(this.identifiant);
    }
    /*
    this.Articles= this.articlesService.lesArticles;
    this.modifForm = this.formBuilder.group(
      {
        id:['',Validators.required],
        nom:['',Validators.required],
        image:['',Validators.required],
        prix:['',Validators.required],
        categorie:['',Validators.required],
        dispo:[],
        desc:['',Validators.required],
        qt:['',Validators.required]
      }
      )*/

  }
/*
  public get id()
  { return this.modifForm.get('id'); }
  public get nom()
  { return this.modifForm.get('nom'); }
  public get image()
  { return this.modifForm.get('image'); }
  public get prix()
  { return this.modifForm.get('prix'); }
  public get date()
  { return this.modifForm.get('categorie'); }
  public get dispo()
  { return this.modifForm.get('dispo'); }
  public get desc()
  { return this.modifForm.get('nom'); }
  public get qt()
  { return this.modifForm.get('qt'); }*/

}
