import { User } from './../../model/userModel/User';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appheader',
  templateUrl: './appheader.component.html',
  styleUrls: ['./appheader.component.css']
})
export class AppheaderComponent implements OnInit {
  currentUser: User;
  constructor() { 
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
  }

  IsUserConnected(){
    if (localStorage.getItem('currentUser')==null){
      return false;
    }return true;
  } 



}
