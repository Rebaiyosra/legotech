import { Component, OnInit,Input } from '@angular/core';
import { Responsable } from '../Models/Responsable';
import { ResponsableServiceService } from '../Services/responsable-service.service';

@Component({
  selector: 'app-responsables-liste',
  templateUrl: './responsables-liste.component.html',
  styleUrls: ['./responsables-liste.component.css']
})
export class ResponsablesListeComponent implements OnInit {

  responsables !: Responsable[];
  
  constructor(private responsableService:ResponsableServiceService) { }

  ngOnInit(): void {
   this.responsables= this.responsableService.onAffiche();
  }
  @Input() id!:number;
  @Input() nom!:String;
  @Input() prenom!:String;
  @Input() dateNaissance!:Date;
  @Input() telephone!:number;
  @Input() mail!:string;
  @Input() poste!:string;

}
