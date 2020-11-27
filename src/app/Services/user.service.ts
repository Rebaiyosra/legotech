import { Injectable } from '@angular/core';
import { Admin } from '../Models/Admin';
import { Responsable } from '../Models/Responsable';
import { Utilisateur } from '../Models/Utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  lesResponsables= [
    new Responsable(
      1,
      "ahlem",
      "msalmi",
      25585690,
      "ahlem@gmail.com",
      "Responsable Article",
      "responsable",
      "ahlem"
    ),
    new Responsable(
      2,
      "yosra",
      "rebai",
      25585690,
      "yosra@gmail.com",
      "Responsable service aprés vente",
      "responsable",
      "yosra"
    ),
  ]
  lesUtilisateurs= [
    new Utilisateur(
      1,
      "ahlem",
      "msalmi",
      25585690,
      "ahlem@gmail.com",
      "omrane sup",
      "tunis",
      "tunis",
      1091,
      11552266,
      "femme",
      "utilisateur",
      "ahlem",
     
    ),
    new Utilisateur(
      2,
      "yosra",
      "rebai",
      25585690,
      "yosra@gmail.com",
      "omrane sup",
      "tunis",
      "tunis",
      1091,
      11552266,
      "femme",
      "utilisateur",
      "yosra",
     
    ),
  ]
  admin= [
    new Admin(
      1,
      "ahlem",
      "msalmi",
      25585690,
      "ahlem@gmail.com",
      "admin",
      "admin"
    
    ),
 
  ]
  constructor() { }
  onAfficheUtili(){
    return this.lesUtilisateurs;
  }
  onAfficheRes(){
    return this.lesResponsables;
  }
  onAfficheAdmin(){
    return this.admin;
  }
 

}
