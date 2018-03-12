//import { TwitterService } from 'ng2-twitter';
import { User } from './../../../model/userModel/User';
import { AlertService } from './../../../service/alert.service';
import { FreelanceJob } from './../../../model/freelanceModel/FreelanceJob';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FreelanceProposal } from './../../../model/freelanceModel/FreelanceProposal';
import { FreelanceProposalService } from './../../../service/freelanceService/freelance-proposal.service';
import { router } from './../../../app.router';
import { ActivatedRoute, Params } from '@angular/router';
import { FreelanceService } from './../../../service/freelanceService/freelance.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import  swal  from 'sweetalert2';


//import { Twitter } from 'twitter';


@Component({
  selector: 'app-freelancejob-details',
  templateUrl: './freelancejob-details.component.html',
  styleUrls: ['./freelancejob-details.component.css'],
  
 
})
export class FreelancejobDetailsComponent implements OnInit {
  currentUser: User;
  title = 'app works!';
  result = '';
  
  constructor(private service:FreelanceService,
    private route: ActivatedRoute,
    private serviceProposal:FreelanceProposalService,
    private alertService: AlertService) { 
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      
    }

  freelanceJob?:FreelanceJob=null;
 // params: Params;
  ngOnInit() {
   
   /* 
    var client = new Twitter({
      consumer_key: 'HkLUoDE5nTTpNx1abKTiT6srB',
      consumer_secret: '4kXrSpBtsYugynqsZheWKlPjTzWsu7M1oT6lD6lJr0VEKDNuML',
      access_token_key: '189072409-rv0bY3qaDdPwH8nr7FHl5sSyxjTpPcnXGQ556sJi',
      access_token_secret: 'Osmj7aSRza2glBnMDccJ1oXjgvGsoRlsMsjXYaxJJKXGa'
    });
     
    var params = {screen_name: 'nodejs'};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
      if (!error) {
        console.log(tweets);
      }
    });
   
      client.post('statuses/update', {status: 'I Love Twitter'})
      .then(function (tweet) {
        console.log(tweet);
      })
      .catch(function (error) {
        throw error;
      })
    */

    this.route.params
    .switchMap((params: Params) => this.service.getJobById(+params['id']))
    .subscribe(freelanceJob=>this.freelanceJob=freelanceJob);
    //return this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
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
     
      this.serviceProposal.submitProposal(freelanceProposal).subscribe(createdProposal => {
      
        swal(
          'Proposal submited successfully!',
          'Success',
          'success'
        )
       },
       error => {
        //this.alertService.error(error.text());
        swal(
          'Oops...',
          error.text(),
          'error'
        )
           console.log(error);
      
    })
    });
       //this.router.navigate(['/myPostedJobs']);
      }

      get coverLetter(){
        return this.formSubmitProposal.get('coverLetter');
      }

      get freelancerBudget(){
        return this.formSubmitProposal.get('freelancerBudget');
      }

      isFieldValid(field: string) {
        return !this.formSubmitProposal.get(field).valid && this.formSubmitProposal.get(field).touched;
      }
      
      displayFieldCss(field: string) {
        return {
          'has-error': this.isFieldValid(field),
          'has-feedback': this.isFieldValid(field)
        };
      }

      private showValue($event: any): void {
        console.log($event);
      }

      updateFreelanceJob(job,$event,str:string):void{
        console.log($event.value);
        let jobb : FreelanceJob;
        jobb=job;
        if(str=="title"){ 
          jobb.title=$event.value;
        }
        if(str=="description"){ 
          jobb.description=$event.value;
        }
        if(str=="projectHours"){ 
          jobb.projectHours=$event.value;
        }
        if(str=="projectLength"){ 
          jobb.projectLength=$event.value;
        }
        if(str=="salary"){ 
          jobb.salary=$event.value;
        }
        if(str=="freelancerLevel"){ 
          jobb.freelancerLevel=$event.value;
        }
        if(str=="freelancersNumber"){ 
          jobb.freelancersNumber=$event.value;
        }
        if(str=="category"){ 
          jobb.category=$event.value;
        }
        if(str=="freelancerLevel"){ 
          jobb.freelancerLevel=$event.value;
        }

       
      
        this.service.updateFreelanceJob(jobb).subscribe(jobUpdated => {
          "Job updated"
        },  error => {
         // this.alertService.error(error.text());
         
        
      });
      }

      IsUserConnected(){
        if (localStorage.getItem('currentUser')==null){
          return false;
        }return true;
      }



     /* getHomeTimeline(){
        this.twitter.get(
          'https://api.twitter.com/1.1/statuses/home_timeline.json',
          {
            count: 5
          },
          {
            consumerKey: 'HkLUoDE5nTTpNx1abKTiT6srB',
            consumerSecret: '4kXrSpBtsYugynqsZheWKlPjTzWsu7M1oT6lD6lJr0VEKDNuML'
          },
          {
            token: '189072409-rv0bY3qaDdPwH8nr7FHl5sSyxjTpPcnXGQ556sJi',
            tokenSecret: 'Osmj7aSRza2glBnMDccJ1oXjgvGsoRlsMsjXYaxJJKXGa'
          }
      ).subscribe((res)=>{
          this.result = res.json().map(tweet => tweet.text);
      });
      }*/

}
