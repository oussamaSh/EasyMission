import { Response } from '@angular/http';
import { Router } from '@angular/router';
import { AlertService } from './../../../service/alert.service';
import { Entreprise } from './../../../model/entrepriseModel/entreprise';
import { User } from '../../../model/userModel/User';
import { NgForm } from '@angular/forms';
import { UserService } from './../../../service/userService/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  loading = false;
  returnUrl: string;

  constructor(
      private router: Router,
      private userService: UserService,
      private alertService: AlertService) { }

  ngOnInit() {
      // reset login status
      this.userService.logout();

  }

  login(f:NgForm) {
      this.loading = true;
      let usr = new User;
      usr.username = f.value.username;
      usr.password = f.value.password;
      this.userService.login(usr).subscribe(
              userLogged => {
                // login successful if there's a jwt token in the response
                console.log(userLogged.token);
                localStorage.setItem('currentUser', JSON.stringify(userLogged));
                this.router.navigate(['/candidates']);
              },
              error => {
                  this.alertService.error(error.text());
                  console.log(error);
                  this.loading = false;
              });
  }

}
