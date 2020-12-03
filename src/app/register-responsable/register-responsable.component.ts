import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ResponsableService } from '../Services/responsable.service';

@Component({
  selector: 'app-register-responsable',
  templateUrl: './register-responsable.component.html',
  styleUrls: ['./register-responsable.component.css']
})
export class RegisterResponsableComponent implements OnInit {
  poste="poste";
  name?:string;
  prenom?:string;
  mdp?:string;
  mail?:string;
  numTel?:number;
  message?:string;
  constructor(private service:ResponsableService,private rt:Router) { }
  
  ngOnInit(): void {
  }
  onSaveResponsable(form:NgForm){
    this.message="";
    if (this.poste=="poste"){
       this.message="ERROR : Choisissez votre Etat";
    }else
    {
    const object={
      nom:this.name,
      prenom:this.prenom,
      mdp:this.mdp,
      email:this.mail,
      telephone :this.numTel,
      role :this.poste
    }    
    this.service.create(object)
      .subscribe(
        response =>{ console.log(response);this.rt.navigate(['/liste-responsable'])},
        error => {console.log(error);this.message="ERROR : Email est utiliseé par un autre responsable";}
        
      );
  }
}
}
