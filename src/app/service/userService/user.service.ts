import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  url="http://localhost:18080/EasyMission-web/rest/";

  constructor(private http:Http) {  }

  register(user,role){

    console.log(role);
    if(role=="candidate"){
      return this.http.post(this.url + 'candidates', user).map(resp => resp.json());
    }

    if(role=="recruiter"){
      return this.http.post(this.url + 'recruiters', user).map(resp => resp.json());
    }

    if(role=="entreprisefounder"){
      return this.http.post(this.url + 'entrepriseFounders', user).map(resp => resp.json());
    }

       
  }

  getAllCandidates() {
    return this.http.get(this.url + 'candidates').map(resp => resp.json());
  }  

  login(usr) {
    return this.http.post(this.url + 'authentication', usr).map(resp => resp.json());
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }

  updateProfile(user){
    return this.http.put(this.url + 'users', user, this.jwt()).map(resp => resp.json());
  }

  private jwt() {
    // create authorization header with jwt token
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
        let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
        return new RequestOptions({ headers: headers });
    }
}

} 
