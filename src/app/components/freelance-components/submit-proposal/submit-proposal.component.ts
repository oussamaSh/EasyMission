import { FreelanceJob } from './../../../model/freelanceModel/FreelanceJob';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { FreelanceProposal } from './../../../model/freelanceModel/FreelanceProposal';
import { FreelanceProposalService } from './../../../service/freelanceService/freelance-proposal.service';
import { Component, OnInit } from '@angular/core';
import { error } from 'util';

@Component({
  selector: 'app-submit-proposal',
  templateUrl: './submit-proposal.component.html',
  styleUrls: ['./submit-proposal.component.css']
})
export class SubmitProposalComponent implements OnInit {

  constructor(private serviceProposal:FreelanceProposalService,private route: ActivatedRoute,
    private router: Router,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params) //log the entire params object
      console.log(params['id']) //log the value of id
    });
  }

  
  freelanceProposal:FreelanceProposal;
  params: Params;

  formSubmitProposal = new FormGroup({
    coverLetter : new FormControl('',[Validators.required]),
   
    freelancerBudget : new FormControl('',[Validators.required])
    
  });

  addProposal(formSubmitProposal:FormGroup){
    
    this.route.params.subscribe((params: Params) => {
      let id = params['id'];
      let freelanceProposal= new FreelanceProposal;
      let freelanceJob = new FreelanceJob;
      freelanceJob.id = id;
      freelanceProposal.coverLetter=formSubmitProposal.value.coverLetter;
      freelanceProposal.freelancerBudget=formSubmitProposal.value.freelancerBudget;
      freelanceProposal.freelanceJob  = freelanceJob;
     
      this.serviceProposal.submitProposal(freelanceProposal).subscribe(data => {
        "Proposal submited"
      },error => {
        error
      });
    });
      
     /*  this.route.params
       .switchMap((params: Params) => this.serviceProposal.submitProposal(freelanceProposal,+params['id']))
       .subscribe(data => {
        console.log("c bon");
       },
        error => {
            console.log(error);
        });*/

       //this.router.navigate(['/myPostedJobs']);
    
      }

      get coverLetter(){
        return this.formSubmitProposal.get('coverLetter');
      }

      get capacity(){
        return this.formSubmitProposal.get('capacity');
      }
}
