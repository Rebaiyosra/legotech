import { Component, OnInit,Input } from '@angular/core';
import { Responsable } from '../Models/Responsable';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-responsables-liste',
  templateUrl: './responsables-liste.component.html',
  styleUrls: ['./responsables-liste.component.css']
})
export class ResponsablesListeComponent implements OnInit {

  responsables !: Responsable[];
  
  constructor(private responsableService:UserService ) { }

  ngOnInit(): void {
   this.responsables= this.responsableService.onAfficheRes();
  }
  @Input() id!:number;
  @Input() nom!:String;
  @Input() prenom!:String;
  @Input() mail!:Date;
  @Input() telephone!:number;
  @Input() poste!:string;

  @Input() role!:string;

}
