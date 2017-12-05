import { FreelanceJob } from './../../model/freelanceModel/FreelanceJob';
import { Http, RequestOptions } from '@angular/http';
import { DataService } from './../data.service';
import { Injectable } from '@angular/core';

@Injectable()
export class FreelanceService extends DataService {
  
    private URL="http://localhost:18080/EasyMission-web/rest/freelance";
    private URLGetById="http://localhost:18080/EasyMission-web/rest/freelance/jobById/";
    private URLGetMyPostedJobs="http://localhost:18080/EasyMission-web/rest/freelance/MyPostedJobs";
    private URLDeleteJob="http://localhost:18080/EasyMission-web/rest/freelance/deleteJob";
     
    
    liste:FreelanceJob[];
   
     constructor(public http:Http) {
      super("http://localhost:18080/EasyMission-web/rest/freelance",http);
      }
  
      getJobById(id:number){
        return this.http.get(this.URLGetById+id).map(resp=>resp.json());
      }

      getMyPostedJobs(){
        return this.http.get(this.URLGetMyPostedJobs).map(resp=>resp.json());
      }

      createJob(ressource){
        return this.http.post(this.URL, ressource).map(resp=>resp.json());
       }

      deleteJob(ressource){
       // return this.http.delete(this.URLDeleteJob, JSON.stringify(ressource)).map(resp=>resp.json());
       return this.http.delete(this.URLDeleteJob, new RequestOptions({
        body: ressource
       }))
     
      }

      /*url = "http://localhost:18080/EasyMission-web/rest/freelance";
      constructor(private http: Http) { }
    
      getAllPosts() {
        return this.http.get(this.url).map(resp => resp.json());
      }*/

}
