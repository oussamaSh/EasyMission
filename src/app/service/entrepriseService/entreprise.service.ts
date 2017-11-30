import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class EntrepriseService {
   
  url="http://localhost:18080/EasyMission-web/rest/entreprises";
  url1="http://localhost:18080/EasyMission-web/rest/entreprises/All";
  constructor(private http: Http) { }

   getAllEntreprise() {
    return this.http.get(this.url1).map(resp => resp.json());
  }
   createEntreprise(entreprise) {

    return this.http.post(this.url, entreprise).map(resp => resp.json());
  }
}
