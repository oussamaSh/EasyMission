import { Response } from '@angular/http';
import { Router } from '@angular/router';
import { AlertService } from './../../../service/alert.service';
import { Entreprise } from './../../../model/entrepriseModel/entreprise';
import { User } from '../../../model/userModel/User';
import { NgForm } from '@angular/forms';
import { UserService } from './../../../service/userService/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  users:any[];
  picture = "";
  loading = false;

  constructor(private service:UserService,
             private alertService: AlertService,
             private router: Router) { }

  ngOnInit() {
  }


  register(f:NgForm){
    this.loading = true;
    let user = new User;
    let role = f.value.role;

    user.firstname = f.value.firstname;
    user.lastname = f.value.lastname;
    user.mail = f.value.mail;
    user.username = f.value.username;
    user.password = f.value.password;
    user.confirmPassword = f.value.confirmPassword;
    user.gender = f.value.gender;
    user.picture = this.picture;

    this.service.register(user,role).subscribe(data => {
        this.alertService.success('Registration successful');
        // this.router.navigate(['/login']);
        },
        error => {
            this.alertService.error(error.text());
            this.loading = false;
            console.log(error.text());
        }
      );
  }

  onChange(event) {
    var files = event.srcElement.files;
    this.picture = files[0].name;
  }

}
