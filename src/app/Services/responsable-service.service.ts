import { Injectable } from '@angular/core';
import { Responsable } from '../Models/Responsable';

@Injectable({
  providedIn: 'root'
})
export class ResponsableServiceService {
  lesResponsables= [
    new Responsable(
      1,
      "ahlem",
      "msalmi",
      new Date(2019,5,15),
      24555988,
      
      "ahlem@gmail.com",
      "reponsable des articles"
    ),
    new Responsable(
      2,
      "yosra",
      "rebai",
      new Date(2019,5,15),
      24555988,
  
      "yosra@gmail.com",
      "responsable service aprés vente"
    ),
  ]
  constructor() { }
  onAffiche(){
    return this.lesResponsables;
  }
}
