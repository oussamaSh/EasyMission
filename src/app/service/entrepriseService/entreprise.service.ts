import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class EntrepriseService {
   
  url="http://localhost:18080/EasyMission-web/rest/entreprises";
  url1="http://localhost:18080/EasyMission-web/rest/entreprises/All";
  urlRecruiter="http://localhost:18080/EasyMission-web/rest/recruiter";
  urldetaille="http://localhost:18080/EasyMission-web/rest/entreprises/getEntrepriseById/";
  urlaffecter="http://localhost:18080/EasyMission-web/rest/recruiter";
  
  

  constructor(private http: Http) { }

   getAllEntreprise() {
    return this.http.get(this.url1).map(resp => resp.json());
  }

  getRecruiterDisponible(){
  return this.http.get(this.urlRecruiter).map(resp => resp.json());

  }
   createEntreprise(entreprise) {

    return this.http.post(this.url, entreprise).map(resp => resp.json());
  }

     deleteEntreprise(ressource){
      
       return this.http.delete(this.url, new RequestOptions({
        body: ressource
       }))
     
      }

      getEntrepriseById(id:number){
        return this.http.get(this.urldetaille+id).map(resp=>resp.json());
      }

      recruiterInENtreprise(user){
          return this.http.put(this.urlaffecter, user).map(resp => resp.json());
      }

       getRecruiterByEntreprise(e){
          return this.http.post(this.urlaffecter, e).map(resp => resp.json());
      }

   

}
