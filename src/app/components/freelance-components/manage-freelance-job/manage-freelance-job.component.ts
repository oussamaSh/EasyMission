import { RequestOptions } from '@angular/http';
import { FreelanceJob } from './../../../model/freelanceModel/FreelanceJob';
import { FreelanceService } from './../../../service/freelanceService/freelance.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-freelance-job',
  templateUrl: './manage-freelance-job.component.html',
  styleUrls: ['./manage-freelance-job.component.css']
})
export class ManageFreelanceJobComponent implements OnInit {

  freelanceJobs:any[];
  //freelanceJob:FreelanceJob;
  constructor( private service:FreelanceService) { }

  ngOnInit() {
    this.service.getMyPostedJobs().subscribe(freelanceJobs=>this.freelanceJobs=freelanceJobs);
  }

  deleteFreelanceJob(freelanceJob){
    this.service.deleteJob(freelanceJob).subscribe(deletedJob=>{
      console.log(deletedJob);
      let index=this.freelanceJobs.indexOf(freelanceJob);

      this.freelanceJobs.splice(index,1);
    })

  
  }

}
