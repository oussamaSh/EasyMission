import { FreelanceProposal } from './../../../model/freelanceModel/FreelanceProposal';
import { FreelanceProposalService } from './../../../service/freelanceService/freelance-proposal.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proposal-requests',
  templateUrl: './proposal-requests.component.html',
  styleUrls: ['./proposal-requests.component.css']
})
export class ProposalRequestsComponent implements OnInit {

  freelanceProposals:any[];
  freelanceProposal:FreelanceProposal;
  
  constructor( private service:FreelanceProposalService) { }

  ngOnInit() {

    this.service.getMyProposals().subscribe(freelanceProposals=>this.freelanceProposals=freelanceProposals);
  }

  acceptProposal(proposal){
    this.service.acceptProposal(proposal).subscribe(freelanceProposal=>this.freelanceProposal=freelanceProposal);
    
  }
}
