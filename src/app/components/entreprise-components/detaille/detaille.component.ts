import { Component, OnInit } from '@angular/core';
import { EntrepriseService } from "../../../service/entrepriseService/entreprise.service";
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Entreprise } from "../../../model/entrepriseModel/entreprise";
import { User } from "../../../model/userModel/User";

@Component({
  selector: 'app-detaille',
  templateUrl: './detaille.component.html',
  styleUrls: ['./detaille.component.css']
})
export class DetailleComponent implements OnInit {

  constructor(private service: EntrepriseService, private route: ActivatedRoute) { }

  entreprise: Entreprise;
  params: Params;
  recruiters: any[] = [];
  ngOnInit() {

      

    this.route.params
      .switchMap((params: Params) => this.service.getEntrepriseById(+params['id']))
      .subscribe(entreprise => this.entreprise = entreprise);
  }

 

}
