import { ThisReceiver, ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-register-utilisateur',
  templateUrl: './register-utilisateur.component.html',
  styleUrls: ['./register-utilisateur.component.css']
})
export class RegisterUtilisateurComponent implements OnInit {
  name?:string;
  prenom?:string;
  mdp?:string;
  mail?:string;
  numTel?:string;
  adresse?:string;
  ville?:string;
  codeP?:string;
  cin?:string;
  gender?:string

  constructor() { }

  ngOnInit(): void {
  }
 
}
