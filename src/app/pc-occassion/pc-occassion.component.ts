import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pc-occassion',
  templateUrl: './pc-occassion.component.html',
  styleUrls: ['./pc-occassion.component.css']
})
export class PcOccassionComponent implements OnInit {

  constructor() { }
   
  nom!: string;
  id!: string;
  img!: string;
  prix!: number;
  type?:string;
  frequence?:string;
  stockage?:number;
  wattage?:number;
  ddr?:string
  desc!: string;
  qt!: number;
  art?:string;
  typeRam?:string;
  tailleRam?:number;
  carteGraphique?:string
  processeur?:string;
  typeDisque?:string;
  tailleDisque?:number;
  tailleCarteGraphique?:string;
  tailleEcran?:number;
  ddrCarte?:string;
  formatCarte?:string;
  wattageCarte?:number;
  slotRam?:number;
  capacite?:number;
  typeDisqueDur?:number;
  formatBoitier?:string;
  ngOnInit(): void {
  }

}
