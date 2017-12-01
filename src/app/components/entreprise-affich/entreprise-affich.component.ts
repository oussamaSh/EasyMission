import { Component, OnInit } from '@angular/core';
import {Entreprise} from '../../model/entrepriseModel/entreprise';
import { EntrepriseService } from '../../service/entrepriseService/entreprise.service';
import { Http, Response} from '@angular/http';
@Component({
  selector: 'app-entreprise-affich',
  templateUrl: './entreprise-affich.component.html',
  styleUrls: ['./entreprise-affich.component.css']
})
export class EntrepriseAffichComponent implements OnInit {
entreprises:any[];
  constructor(private service:EntrepriseService) { }

  ngOnInit() {
 var other = this;
 this.service.getAllEntreprise().subscribe(e => this.entreprises = e)
  }

}
