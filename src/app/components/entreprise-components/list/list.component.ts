import { Component, OnInit } from '@angular/core';
import { Entreprise} from '../../../model/entrepriseModel/entreprise';
import { EntrepriseService } from '../../../service/entrepriseService/entreprise.service';
import { Http, Response} from '@angular/http';
import { FilterPipe } from '../../../filter.pipe';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
entreprises: Entreprise[] = [];
  constructor(private service:EntrepriseService) { }

  ngOnInit() {
     var other = this;
 this.service.getAllEntreprise().subscribe(e => this.entreprises = e)

  }
      
deleteEntreprise(entreprise){
    this.service.deleteEntreprise(entreprise).subscribe(deletedEntreprise=>{
      console.log(deletedEntreprise);
      let index=this.entreprises.indexOf(entreprise);

      this.entreprises.splice(index,1);
    
    
    })

  
  }

}
