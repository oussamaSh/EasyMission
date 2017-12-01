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
import { EntrepriseComponent } from './components/entreprise/entreprise.component';
import { EventComponent } from './components/event/event.component';
import { ArticleComponent } from './components/article/article.component';
import { FreelanceComponent } from './components/freelance/freelance.component';

import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routes } from './app.router';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { MediaComponent } from './components/media/media.component';
import { EntrepriseAffichComponent } from './components/entreprise-affich/entreprise-affich.component';
import { AddComponent } from './components/entreprise-components/add/add.component';
import { ListComponent } from './components/entreprise-components/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    AppheaderComponent,
    AppfooterComponent,
    AnnonceComponent,
    EntrepriseComponent,
    EventComponent,
    ArticleComponent,
    FreelanceComponent,
    MediaComponent,
    EntrepriseAffichComponent,
    LoginComponent,
    RegisterComponent,
    AddComponent,
    ListComponent

  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,HttpModule,routes
  ],
  providers: [MediaService,EventService,PlaceService,UserService,FreelanceService,EntrepriseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
