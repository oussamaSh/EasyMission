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
import { FreelanceComponent } from './components/freelance/freelance.component';

import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routes } from './app.router';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { MediaComponent } from './components/media/media.component';
import { FilterPipe } from './filter.pipe';
import { AddComponent } from './components/entreprise-components/add/add.component';
import { ListComponent } from './components/entreprise-components/list/list.component';
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
    FreelanceComponent,
    MediaComponent,
   
    LoginComponent,
    RegisterComponent,
    FilterPipe,
    AddComponent,
    ListComponent,
    CandidatesComponent,
    AlertComponent,
    ProfileComponent,
    DetailleComponent,
    AddRecruiterComponent
   
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,HttpModule,routes
  ],
  providers: [MediaService,EventService,PlaceService,UserService,FreelanceService,EntrepriseService,AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
