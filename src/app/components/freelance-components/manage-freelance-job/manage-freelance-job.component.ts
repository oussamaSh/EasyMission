import { RequestOptions } from '@angular/http';
import { FreelanceJob } from './../../../model/freelanceModel/FreelanceJob';
import { FreelanceService } from './../../../service/freelanceService/freelance.service';
import { Component, OnInit } from '@angular/core';
import  swal  from 'sweetalert2';

@Component({
  selector: 'app-manage-freelance-job',
  templateUrl: './manage-freelance-job.component.html',
  styleUrls: ['./manage-freelance-job.component.css']
})
export class ManageFreelanceJobComponent implements OnInit {

  freelanceJobs:FreelanceJob[]=[];
  freelanceJob : FreelanceJob;
  //freelanceJob:FreelanceJob;
  constructor( private service:FreelanceService) {
  
   }

  ngOnInit() {
    
    this.service.getMyPostedJobs().subscribe(freelanceJobs=>this.freelanceJobs=freelanceJobs);

    
  }

  deleteFreelanceJob(freelanceJob){
    swal({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true,
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.service.deleteJob(freelanceJob).subscribe(deletedJob=>{
          console.log(deletedJob);
         
          let index=this.freelanceJobs.indexOf(freelanceJob);    
          this.freelanceJobs.splice(index,1);
         
        })
        swal(
          'Deleted!',
          'This freelance job has been deleted.',
          'success'
        )

        
      // result.dismiss can be 'cancel', 'overlay',
      // 'close', and 'timer'
      } else if (result.dismiss === 'cancel') {
        swal(
          'Cancelled',
          'Delete cancelled',
          'error'
        )
      }
    }),
   error => {
    swal(
      'Oops...',
      error.text(),
      'error'
    )}
  }

  freelanceJobToDelete(freelanceJobToDelete){
    this.freelanceJob=freelanceJobToDelete;
    
  }

}
