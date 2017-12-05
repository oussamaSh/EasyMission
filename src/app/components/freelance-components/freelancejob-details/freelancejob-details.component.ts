import { FreelanceProposalService } from './../../../service/freelanceService/freelance-proposal.service';
import { router } from './../../../app.router';
import { ActivatedRoute, Params } from '@angular/router';
import { FreelanceService } from './../../../service/freelanceService/freelance.service';
import { Component, OnInit } from '@angular/core';
import { FreelanceJob } from '../../../model/freelanceModel/FreelanceJob';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-freelancejob-details',
  templateUrl: './freelancejob-details.component.html',
  styleUrls: ['./freelancejob-details.component.css']
})
export class FreelancejobDetailsComponent implements OnInit {

  constructor(private service:FreelanceService,private route: ActivatedRoute,private serviceProposal:FreelanceProposalService) { }

  freelanceJob:FreelanceJob;
 // params: Params;
  ngOnInit() {

    this.route.params
    .switchMap((params: Params) => this.service.getJobById(+params['id']))
    .subscribe(freelanceJob=>this.freelanceJob=freelanceJob);
  }

}
