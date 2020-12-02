import { Component, OnInit,Input } from '@angular/core';
import { Utilisateur } from '../Models/Utilisateur';
import {UserService} from '../Services/user.service'
import { UtilisateursServiceService } from '../Services/utilisateurs.service';
@Component({
  selector: 'app-utilisateurs-liste',
  templateUrl: './utilisateurs-liste.component.html',
  styleUrls: ['./utilisateurs-liste.component.css']
})
export class UtilisateursListeComponent implements OnInit {
  utilisateurs: any;
  
  constructor(private service:UtilisateursServiceService) { }
  ngOnInit(): void {
      this.onCharger();
     }

      onCharger(){
      this.service.getAll()
        .subscribe(
          data=>{this.utilisateurs=data},
          error=>{console.log(error)}
        );
      }

        onSuprimmer(id:number,i:number){
          this.service.delete(id)
            .subscribe(
              response=>{console.log(response);this.onCharger()},
              // this.responsables.splice(this.responsables.length-(1+i),i);},
              error=>{console.log(error)}
            );   
}
}
