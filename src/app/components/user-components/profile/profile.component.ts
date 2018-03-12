import { Router } from '@angular/router';
import { AlertService } from './../../../service/alert.service';
import { UserService } from './../../../service/userService/user.service';
import { NgForm } from '@angular/forms';
import { User } from './../../../model/userModel/User';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: User;
  picture = "";

  constructor(private service:UserService, private alertService: AlertService, private router: Router) { 

    if(localStorage.getItem('currentUser')!=null){
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      console.log(this.currentUser.lastname);
    }else{
      this.router.navigate(['/login'])
    }
  }

  @Input()
  connectedUser = JSON.parse(localStorage.getItem('currentUser'));

  ngOnInit() {
    
  }

  updateProfile(f:NgForm){
    let user = new User;

    user.firstname = f.value.firstname;
    user.lastname = f.value.lastname;
    user.username = f.value.username;
    user.password = f.value.password;
    user.confirmPassword = f.value.confirmPassword;
    user.phone = f.value.phone;
    user.country = f.value.country;
    if(this.picture!=""){
      user.picture = this.picture;
    }    

    this.service.updateProfile(user).subscribe(userModified => {
        this.alertService.success('Profile modified !');
        localStorage.removeItem('currentUser');
        localStorage.setItem('currentUser', JSON.stringify(userModified));
        },
        error => {
            this.alertService.error(error.text());
            console.log(error.text());
        }
      );
  }

  onChange(event) {
    var files = event.srcElement.files;
    this.picture = files[0].name;
  }

  desactivateAccount(){
    
  }

}
