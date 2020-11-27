import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-responsable',
  templateUrl: './register-responsable.component.html',
  styleUrls: ['./register-responsable.component.css']
})
export class RegisterResponsableComponent implements OnInit {

  constructor() { }
  name?:string;
  prenom?:string;
  mdp?:string;
  mail?:string;
  numTel?:number;
  poste?:string
  ngOnInit(): void {
  }

}
