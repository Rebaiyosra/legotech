import { Injectable } from '@angular/core';
import{Utilisateur} from '../Models/Utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UtilisateursServiceService {
  lesUtilisateurs= [
    new Utilisateur(
      1,
      "ahlem",
      "msalmi",
      new Date(2019,5,15),
      24555988,
      
      "ahlem@gmail.com",
      "omrane sup"
    ),
    new Utilisateur(
      2,
      "yosra",
      "rebai",
      new Date(2019,5,15),
      24555988,
  
      "yosra@gmail.com",
      "omrane sup"
    ),
  ]
  constructor() { }
  onAffiche(){
    return this.lesUtilisateurs;
  }
}
