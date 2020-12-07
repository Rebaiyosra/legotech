import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticlesService } from '../Services/articles.service';
import{MenuResponsableArticleComponent} from '../menu-responsable-article/menu-responsable-article.component';
@Component({
  selector: 'app-detail-article-res',
  templateUrl: './detail-article-res.component.html',
  styleUrls: ['./detail-article-res.component.css']
})
export class DetailArticleResComponent implements OnInit {
  lesArticles?:any[];
  identifiant?:string;
  types:string[]=[];

  
  
 
  constructor(private articlesService:ArticlesService,private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.lesArticles=this.articlesService.lesAcc;
    this.identifiant = this.activatedRoute.snapshot.params['id'];
    
    this.types=this.articlesService.onRemplir();
 
  }
  onNavigate(){
    this.router.navigate(['/liste-article']);
  }

}
