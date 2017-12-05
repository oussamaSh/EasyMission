import { FreelanceProposalService } from './../../../service/freelanceService/freelance-proposal.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-proposals-freelance',
  templateUrl: './my-proposals-freelance.component.html',
  styleUrls: ['./my-proposals-freelance.component.css']
})
export class MyProposalsFreelanceComponent implements OnInit {

  freelanceProposals:any[];
  
  constructor( private service:FreelanceProposalService) { }

  ngOnInit() {
    
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = "assets/js/test.js";
    document.body.appendChild(script);

    this.service.getMyProposals().subscribe(freelanceProposals=>this.freelanceProposals=freelanceProposals);
  }

}
