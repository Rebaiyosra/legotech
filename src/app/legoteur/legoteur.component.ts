import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticlesService } from 'src/app/Services/articles.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-legoteur',
  templateUrl: './legoteur.component.html',
  styleUrls: ['./legoteur.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class LegoteurComponent implements OnInit {

  closeResult !: string;
  articles ?: any[];

  constructor(private modalService: NgbModal,private articlesService:ArticlesService,private router:Router) {}

  openScrollableContent(longContent: any) {
    this.modalService.open(longContent, { scrollable: true, size: 'lg' });
  }
  ngOnInit(): void {
    this.articles= this.articlesService.onAffiche();
   }
   articleDetails(id:string){
     this.router.navigate(['voir',id]);
   }
   @Input() id!:number;
   @Input() nom!:String;
   @Input() image!:String;
   @Input() categorie!: String;
   @Input() prix!:number;
   @Input() qte!:number;
   @Input() desc!:string;

}
