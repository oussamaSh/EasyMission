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
      return this.http.post(this.URLSubmitProposal, proposal).map(resp=>resp.json());
     }

     getMyProposals(){
      return this.http.get(this.URLMyProposals).map(resp=>resp.json());
     }

     getProposalRequests(){
      return this.http.get(this.URLProposalRequests).map(resp=>resp.json());
     }

     acceptProposal(proposal:FreelanceProposal){
      return this.http.patch(this.URLProposalRequests,proposal, proposal.state="accepted").map(resp=>resp.json());
     }

}
