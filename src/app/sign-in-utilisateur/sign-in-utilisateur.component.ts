import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilisateursServiceService } from '../Services/utilisateurs.service';

@Component({
  selector: 'app-sign-in-utilisateur',
  templateUrl: './sign-in-utilisateur.component.html',
  styleUrls: ['./sign-in-utilisateur.component.css']
})
export class SignInUtilisateurComponent implements OnInit {

  constructor(private service:UtilisateursServiceService ,private rt: Router) { }
  email:string="";
  mdp:string="";
  personne:any;
  message?:string;
  ngOnInit(): void {
  }

  onConnecte(form:NgForm){
    this.service.getAll()
    .subscribe(
      data=>{for (let i of  data){
        if (i.email==this.email && i.mdp==this.mdp){
            console.log(data);
            this.personne=i;
        }    
      }
      if (this.personne!=null){
        this.rt.navigate(['/acceuil-utilisateur']);
      }else
      this.message="votre email  ou votre mot de passe est  incorrect";
      },
      error=>{console.log(error)}
    );
  
  }
}
