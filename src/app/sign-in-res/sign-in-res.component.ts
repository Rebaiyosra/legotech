import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ResponsableService } from '../Services/responsable.service';

@Component({
  selector: 'app-sign-in-res',
  templateUrl: './sign-in-res.component.html',
  styleUrls: ['./sign-in-res.component.css']
})
export class SignInResComponent implements OnInit {
  email:string="";
  mdp:string="";
  personne:any;
  message?:string;
  constructor(private service:ResponsableService,private rt : Router) { }

  ngOnInit(): void {
  }
  
  onConnecte(form:NgForm){
    this.service.getAll()
    .subscribe(
      data=>{for (let i of  data){
        if (i.email==this.email && i.mdp==this.mdp)
            this.personne=i;    
      }
      if (this.personne!=null){
        switch(this.personne.role){
          case "adminstrateur": this.rt.navigate(['/register-responsable']);
                                break;
          case "responsable article" : this.rt.navigate(['/ajouter-article']);
                                       break;
          default : this.rt.navigate(['/register-responsable']);
                    break;
        }
      }else
      this.message="votre email  ou votre mot de passe est  incorrect";
      },
      error=>{console.log(error)}
    );
  }
  // onConnecte(form:NgForm){
  //   this.service.getAll()
  //   .subscribe(
  //     data=>{console.log(typeof(data));console.log((data));
  //          for (let i of data){
  //            console.log(i);
  //          }
  //     },
  //     error=>{console.log(error)}
  //   );
  // }
}
