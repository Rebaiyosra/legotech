import { Component, OnInit,Input } from '@angular/core';
import { Utilisateur } from '../Models/Utilisateur';
import {UserService} from '../Services/user.service'
@Component({
  selector: 'app-utilisateurs-liste',
  templateUrl: './utilisateurs-liste.component.html',
  styleUrls: ['./utilisateurs-liste.component.css']
})
export class UtilisateursListeComponent implements OnInit {
  utilisateurs !: Utilisateur[];
  
  constructor(private utilisateurService:UserService) { }

  ngOnInit(): void {
   this.utilisateurs= this.utilisateurService.onAfficheUtili();
  }
  @Input() id!:number;
  @Input() nom!:String;
  @Input() prenom!:String;
  @Input() mail!:Date;
  @Input() telephone!:number;
  @Input() gouver!:string;
  @Input() adresse!:string;
  @Input() ville!:string;
  @Input() photo !:string;
  @Input() codePostal!:number;
  @Input() numCin!:number;
  @Input() sexe!:string;
  @Input() role!:string;
}
