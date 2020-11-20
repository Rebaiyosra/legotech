import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in-utilisateur',
  templateUrl: './sign-in-utilisateur.component.html',
  styleUrls: ['./sign-in-utilisateur.component.css']
})
export class SignInUtilisateurComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onRegister(){
    this.router.navigate(['register-utilisateur']);
  }  

}
