import { FreelanceProposal } from './../../../model/freelanceModel/FreelanceProposal';
import { FreelanceProposalService } from './../../../service/freelanceService/freelance-proposal.service';
import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';

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
   
    this.service.getProposalRequests().subscribe(freelanceProposals=>this.freelanceProposals=freelanceProposals);
  }

  acceptProposal(proposal){
    this.service.acceptProposal(proposal).subscribe();
    
  }
  declineProposal(proposal){
    this.service.declineProposal(proposal).subscribe();
    
  }
}
