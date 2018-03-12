import { FreelanceJob } from './../../model/freelanceModel/FreelanceJob';
import { Http, RequestOptions,Headers } from '@angular/http';
import { DataService } from './../data.service';
import { Injectable } from '@angular/core';

@Injectable()
export class FreelanceService extends DataService {
  
    private URL="http://localhost:18080/EasyMission-web/rest/freelance";
    private URLGetById="http://localhost:18080/EasyMission-web/rest/freelance/jobById/";
    private URLGetMyPostedJobs="http://localhost:18080/EasyMission-web/rest/freelance/MyPostedJobs";
    private URLDeleteJob="http://localhost:18080/EasyMission-web/rest/freelance/deleteJob";
    private URLUpdateJob="http://localhost:18080/EasyMission-web/rest/freelance/modifier";
     
    
    liste:FreelanceJob[];
    freelanceJob : FreelanceJob;
     constructor(public http:Http) {
      super("http://localhost:18080/EasyMission-web/rest/freelance",http);
      }
  
      getJobById(id:number){
        return this.http.get(this.URLGetById+id).map(resp=>resp.json());
      }

      getMyPostedJobs(){
        return this.http.get(this.URLGetMyPostedJobs,this.jwt()).map(resp=>resp.json());
      }

      createJob(ressource){
        return this.http.post(this.URL, ressource,this.jwt()).map(resp=>resp.json());
       }

      deleteJob(ressource){
       // return this.http.delete(this.URLDeleteJob, JSON.stringify(ressource)).map(resp=>resp.json());
       return this.http.delete(this.URLDeleteJob, new RequestOptions({
        body: ressource,
        headers:new Headers({ 'Authorization': 'Bearer ' +  JSON.parse(localStorage.getItem('currentUser')).token })
       }))
     
      }

      updateFreelanceJob(job){

        return this.http.put(this.URLUpdateJob,job,this.jwt());
      }

      private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers:headers });
        }
    }

}
