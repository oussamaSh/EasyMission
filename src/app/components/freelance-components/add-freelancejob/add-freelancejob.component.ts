import { FreelanceJob } from './../../../model/freelanceModel/FreelanceJob';
import { NgForm, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { FreelanceService } from './../../../service/freelanceService/freelance.service';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";


@Component({
  selector: 'app-add-freelancejob',
  templateUrl: './add-freelancejob.component.html',
  styleUrls: ['./add-freelancejob.component.css']
})
export class AddFreelancejobComponent implements OnInit {
  //form: FormGroup;
  
  
  constructor(private service:FreelanceService,private router: Router,private formBuilder: FormBuilder) { }

  ngOnInit() {
    /*this.formAddJob = this.formBuilder.group({
      title: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      address: this.formBuilder.group({
        street: [null, Validators.required],
        street2: [null],
        zipCode: [null, Validators.required],
        city: [null, Validators.required],
        state: [null, Validators.required],
        country: [null, Validators.required]
      })
    });*/
  }

  formAddJob = new FormGroup({
    title : new FormControl('',
                              [Validators.required
                                ,Validators.minLength(10)]),
   
    category : new FormControl('',[Validators.required]),
    description : new FormControl('',[Validators.required,Validators.minLength(20)]),
    freelancerLevel : new FormControl('',[Validators.required]),
    freelancersNumber : new FormControl('',[Validators.required]),
    projectHours : new FormControl('',[Validators.required]),
    projectLength : new FormControl('',[Validators.required]),
    salary : new FormControl('',[Validators.required]),
    
  });
  addFreelanceJob(formAddJob:FormGroup){
    
       let freelanceJob= new FreelanceJob;
       freelanceJob.title=formAddJob.value.title;
       freelanceJob.capacity=formAddJob.value.capacity;
       freelanceJob.category=formAddJob.value.category;
       freelanceJob.description=formAddJob.value.description;
       freelanceJob.freelancerLevel=formAddJob.value.freelancerLevel;
       freelanceJob.freelancersNumber=formAddJob.value.freelancersNumber;
       freelanceJob.projectHours=formAddJob.value.projectHours;
       freelanceJob.projectLength=formAddJob.value.projectLength;
       freelanceJob.salary=formAddJob.value.salary;
       
       
       this.service.createJob(freelanceJob).subscribe(createdJob=>{
    
        freelanceJob.id=createdJob.id;
       /* console.log(freelanceJob);
        this.freelanceJob.splice(0,1,entreprise);
        console.log(this.entreprises);*/
       })
       this.router.navigate(['/myPostedJobs']);
    
      }


      get title(){
        return this.formAddJob.get('title');
      }

      get capacity(){
        return this.formAddJob.get('capacity');
      }
      get category(){
        return this.formAddJob.get('category');
      }
      get description(){
        return this.formAddJob.get('description');
      }
      get freelancerLevel(){
        return this.formAddJob.get('freelancerLevel');
      }
      get freelancersNumber(){
        return this.formAddJob.get('freelancersNumber');
      }
      get projectHours(){
        return this.formAddJob.get('projectHours');
      }
      get projectLength(){
        return this.formAddJob.get('projectLength');
      }

      get salary(){
        return this.formAddJob.get('salary');
      }

      isFieldValid(field: string) {
        return !this.formAddJob.get(field).valid && this.formAddJob.get(field).touched;
      }
      
      displayFieldCss(field: string) {
        return {
          'has-error': this.isFieldValid(field),
          'has-feedback': this.isFieldValid(field)
        };
      }

}
