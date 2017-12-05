import { FreelanceService } from './../../../service/freelanceService/freelance.service';
import { Component, OnInit } from '@angular/core';
import { FreelanceJobsFilterPipe } from '../../../freelance-jobs-filter.pipe';

@Component({
  selector: 'app-display-freelance-jobs',
  templateUrl: './display-freelance-jobs.component.html',
  styleUrls: ['./display-freelance-jobs.component.css']
})
export class DisplayFreelanceJobsComponent implements OnInit {

  freelanceJobs:any[];
  
  constructor( private service:FreelanceService) { }

  ngOnInit() {
    this.service.getAll().subscribe(freelanceJobs=>this.freelanceJobs=freelanceJobs);
  }
}
