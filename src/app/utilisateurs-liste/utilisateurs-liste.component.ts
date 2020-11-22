import { Component, OnInit,Input } from '@angular/core';
import { Utilisateur } from '../Models/Utilisateur';
import {UtilisateursServiceService} from '../Services/utilisateurs-service.service'
@Component({
  selector: 'app-utilisateurs-liste',
  templateUrl: './utilisateurs-liste.component.html',
  styleUrls: ['./utilisateurs-liste.component.css']
})
export class UtilisateursListeComponent implements OnInit {
  utilisateurs !: Utilisateur[];
  
  constructor(private utilisateurService:UtilisateursServiceService) { }

  ngOnInit(): void {
   this.utilisateurs= this.utilisateurService.onAffiche();
  }
  @Input() id!:number;
  @Input() nom!:String;
  @Input() prenom!:String;
  @Input() dateNaissance!:Date;
  @Input() telephone!:number;
  @Input() mail!:string;
  @Input() adresse!:string;
}
