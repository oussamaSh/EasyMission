import { Component, OnInit } from '@angular/core';
import {Entreprise} from '../../model/entrepriseModel/entreprise';
import { EntrepriseService } from '../../service/entrepriseService/entreprise.service';
import { Http, Response} from '@angular/http';
import { NgForm} from '@angular/forms';


@Component({
  selector: 'app-entreprise',
  templateUrl: './entreprise.component.html',
  styleUrls: ['./entreprise.component.css']
})
export class EntrepriseComponent implements OnInit {

 entreprises:any[];
  constructor(private service:EntrepriseService) { }

  ngOnInit() {
  
  }



  createEntreprise(f:NgForm){

   let entreprise= new Entreprise;
   entreprise.name=f.value.name;
   entreprise.addresse=f.value.addresse;
   entreprise.phone=f.value.phone;
   entreprise.webSite=f.value.webSite;
   entreprise.type=f.value.type;
   entreprise.sector=f.value.sector;
   entreprise.speciality=f.value.speciality;
   entreprise.description=f.value.description;
   
   this.service.createEntreprise(entreprise).subscribe(createdEntreprise=>{

    entreprise.id=createdEntreprise.id;
    console.log(entreprise);
    this.entreprises.splice(0,1,entreprise);
    console.log(this.entreprises);
   })

  }

  deleteEntreprise(entreprise)
   {
    this.service.deleteEntreprise(entreprise)
    .subscribe(deletedPost=>{
      console.log(deletedPost);
      let index=this.entreprises.indexOf(entreprise);
      this.entreprises.splice(index,1);
    })

   }

}
