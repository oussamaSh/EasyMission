import { Component, OnInit } from '@angular/core';
import { User} from '../../../model/userModel/User'
import { EntrepriseService } from '../../../service/entrepriseService/entreprise.service';
import { Entreprise } from "../../../model/entrepriseModel/entreprise";
@Component({
  selector: 'app-add-recruiter',
  templateUrl: './add-recruiter.component.html',
  styleUrls: ['./add-recruiter.component.css']
})
export class AddRecruiterComponent implements OnInit {
  recruiters: any[] = [];
  constructor(private service: EntrepriseService) { }

  ngOnInit() {
    var other = this;
    this.service.getRecruiterDisponible().subscribe(r => this.recruiters = r)
  }



  recruiter(recruiter) {
    let entre= new User;
    entre.id=recruiter.id;
    console.log(entre.id);
    this.service.recruiterInENtreprise(entre).subscribe(rec => {
      console.log(rec);
      let index = this.recruiters.indexOf(recruiter);
      this.recruiters.splice(index, 1);
    })

  }



}
