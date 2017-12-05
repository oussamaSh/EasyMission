
import { FreelanceProposalService } from './service/freelanceService/freelance-proposal.service';
import { AlertComponent } from './components/alert/alert.component';
import { AlertService } from './service/alert.service';
import { RegisterComponent } from './components/user-components/register/register.component';
import { LoginComponent } from './components/user-components/login/login.component';
import { EntrepriseService } from './service/entrepriseService/entreprise.service';
import { FreelanceService } from './service/freelanceService/freelance.service';
import { UserService } from './service/userService/user.service';
import { PlaceService } from './service/eventService/place.service';
import { EventService } from './service/eventService/event.service';
import { MediaService } from './service/eventService/media.service';
import { AppComponent } from './app.component';
import { AppheaderComponent } from './components/appheader/appheader.component';
import { AppfooterComponent } from './components/appfooter/appfooter.component';
import { AnnonceComponent } from './components/annonce/annonce.component';
import { EventComponent } from './components/event/event.component';
import { ArticleComponent } from './components/article/article.component';


import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routes } from './app.router';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { MediaComponent } from './components/media/media.component';
import { FilterPipe } from './filter.pipe';
import { AddComponent } from './components/entreprise-components/add/add.component';
import { ListComponent } from './components/entreprise-components/list/list.component';

import { FreelanceComponentsComponent } from './components/freelance-components/freelance-components.component';
import { DisplayFreelanceJobsComponent } from './components/freelance-components/display-freelance-jobs/display-freelance-jobs.component';
import { FreelancejobDetailsComponent } from './components/freelance-components/freelancejob-details/freelancejob-details.component';
import { ManageFreelanceJobComponent } from './components/freelance-components/manage-freelance-job/manage-freelance-job.component';
import { FreelanceJobsFilterPipe } from './freelance-jobs-filter.pipe';
import { ModalFreelanceComponent } from './components/freelance-components/modal-freelance/modal-freelance.component';
import { AddFreelancejobComponent } from './components/freelance-components/add-freelancejob/add-freelancejob.component';
import { FieldErrorDisplayComponent } from './components/freelance-components/field-error-display/field-error-display.component';
import { SubmitProposalComponent } from './components/freelance-components/submit-proposal/submit-proposal.component';
import { MyProposalsFreelanceComponent } from './components/freelance-components/my-proposals-freelance/my-proposals-freelance.component';
import { ProposalRequestsComponent } from './components/freelance-components/proposal-requests/proposal-requests.component';

import { CandidatesComponent } from './components/user-components/candidates/candidates.component';
import { ProfileComponent } from './components/user-components/profile/profile.component';
import { DetailleComponent } from './components/entreprise-components/detaille/detaille.component';
import { AddRecruiterComponent } from './components/entreprise-components/add-recruiter/add-recruiter.component';


@NgModule({
  declarations: [
    AppComponent,
    AppheaderComponent,
    AppfooterComponent,
    AnnonceComponent,
    
    EventComponent,
    ArticleComponent,
    
    MediaComponent,
   
    LoginComponent,
    RegisterComponent,
    FilterPipe,
    AddComponent,
    ListComponent,

    FreelanceComponentsComponent,
    DisplayFreelanceJobsComponent,
    FreelancejobDetailsComponent,
    ManageFreelanceJobComponent,
    FreelanceJobsFilterPipe,
    ModalFreelanceComponent,
    AddFreelancejobComponent,
    FieldErrorDisplayComponent,
    SubmitProposalComponent,
    MyProposalsFreelanceComponent,
    ProposalRequestsComponent,
    CandidatesComponent,
    AlertComponent,
    ProfileComponent,
    DetailleComponent,
    AddRecruiterComponent
   

  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,HttpModule,routes
  ],


  providers: [MediaService,EventService,PlaceService,UserService,FreelanceService,EntrepriseService,AlertService,FreelanceProposalService],

  bootstrap: [AppComponent]
})
export class AppModule { }
