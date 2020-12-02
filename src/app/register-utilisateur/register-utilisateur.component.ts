import { ThisReceiver, ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { UtilisateursServiceService } from '../Services/utilisateurs.service';

@Component({
  selector: 'app-register-utilisateur',
  templateUrl: './register-utilisateur.component.html',
  styleUrls: ['./register-utilisateur.component.css']
})
export class RegisterUtilisateurComponent implements OnInit {
  gouvernorat="Gouvernorat";
  gender="male";
  name?:string;
  prenom?:string;
  mdp?:string;
  mail?:string;
  numTel?:string;
  adresse?:string;
  ville?:string;
  codeP?:string;
  cin?:string;
  message?:string="";

  constructor(private service:UtilisateursServiceService,private rt:Router) { }

  ngOnInit(): void {
  }
  onSaveUtilisateur(form:NgForm){

    this.message="";
    if (this.gouvernorat=="Gouvernorat"){
       this.message="ERROR : Choisissez le poste de responsable";
    }else
    {
    const object={
      nom:this.name,
      prenom:this.prenom,
      mdp:this.mdp,
      email:this.mail,
      telephone :this.numTel,
      adresse :this.adresse,
      gouvernorat:this.gouvernorat,
      ville:this.ville,
      photo:"",
      code_postal:this.codeP,
      num_cin:this.cin,
      sexe:form.value['gender']
    }    
    this.service.create(object)
      .subscribe(
        response =>{ console.log(response);this.rt.navigate(['/liste-utilisateur'])},
        error => {console.log(error);this.message="ERROR : Email est utiliseé par un autre resposable";}
        
      );
}
  }
}