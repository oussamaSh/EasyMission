import { DataService } from './../data.service';
import {Headers, Http, RequestOptions } from '@angular/http';
import { FreelanceProposal } from './../../model/freelanceModel/FreelanceProposal';
import { Injectable } from '@angular/core';
import { FreelanceJob } from '../../model/freelanceModel/FreelanceJob';

@Injectable()
export class FreelanceProposalService extends DataService {
  

  constructor(public http:Http) {
    super("http://localhost:18080/EasyMission-web/rest/freelance",http);
    }
    private URL="http://localhost:18080/EasyMission-web/rest/freelance";
    private URLSubmitProposal="http://localhost:18080/EasyMission-web/rest/freelance/proposal";
    private URLMyProposals="http://localhost:18080/EasyMission-web/rest/freelance/MyProposals";
    private URLProposalRequests="http://localhost:18080/EasyMission-web/rest/freelance/ProposalRequests";
    private URLAcceptDeclineProposal="http://localhost:18080/EasyMission-web/rest/freelance/AcceptDeclineProposal";

    freelanceProposals:FreelanceProposal[];
   

    submitProposal(proposal:FreelanceProposal){
    /*  const body = JSON.stringify(proposal.freelanceJob.id=idd);
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });*/
      return this.http.post(this.URLSubmitProposal, proposal,this.jwt()).map(resp=>resp.json());
     }

     getMyProposals(){
      return this.http.get(this.URLMyProposals,this.jwt()).map(resp=>resp.json());
     }

     getProposalRequests(){
      return this.http.get(this.URLProposalRequests,this.jwt()).map(resp=>resp.json());
     }

     acceptProposal(proposal:FreelanceProposal){
      proposal.state="accepted";
      return this.http.put(this.URLAcceptDeclineProposal,proposal,this.jwt());
     }

     declineProposal(proposal:FreelanceProposal){
      return this.http.put(this.URLAcceptDeclineProposal,proposal, proposal.state="declined");
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
