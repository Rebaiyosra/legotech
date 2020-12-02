import { Component, OnInit,Input } from '@angular/core';
import { ResponsableService } from '../Services/responsable.service';


@Component({
  selector: 'app-responsables-liste',
  templateUrl: './responsables-liste.component.html',
  styleUrls: ['./responsables-liste.component.css']
})
export class ResponsablesListeComponent implements OnInit {

  responsables?:any;
  
  constructor(private service:ResponsableService ) { }

  ngOnInit(): void {
  //  this.responsables= this.service.getAll();
  console.log(this.service.getAll());
  this.onCharger();

  }

  onCharger(){
    this.service.getAll()
      .subscribe(
        data=>{this.responsables=data},
        error=>{console.log(error)}
      );
    // this.service.getAll()
    //   .subscribe(
    //     data=>{for (let i of  data){
    //       if (i.role!="adminstrateur")
    //         this.responsables.push(i);
    //     }
    //     },
    //     error=>{console.log(error)}
    //   );
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
