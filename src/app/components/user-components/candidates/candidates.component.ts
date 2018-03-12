import { Router } from '@angular/router';
import { User } from './../../../model/userModel/User';
import { UserService } from './../../../service/userService/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css']
})
export class CandidatesComponent implements OnInit {
  currentUser: User;
  candidates:any[];
  constructor(private service:UserService, private router: Router) {
    
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.router.navigate(['/candidates']);
   }

  ngOnInit() {
    
 var other = this;
 this.service.getAllCandidates().subscribe(e => this.candidates = e)
  }

  IsUserConnected(candidateUsername){
    if (this.currentUser.username!=candidateUsername){
      return false;
    }return true;
  }

}
