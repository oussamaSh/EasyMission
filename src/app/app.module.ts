import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AnnonceComponent } from './annonce/annonce.component';
import { ArticleComponent } from './article/article.component';
import { EntrepriseComponent } from './entreprise/entreprise.component';
import { EventComponent } from './event/event.component';
import { FreelanceComponent } from './freelance/freelance.component';
import { UserComponentComponent } from './user-component/user-component.component';
import { FreelanceComponentComponent } from './freelance-component/freelance-component.component';
import { EventComponentComponent } from './event-component/event-component.component';
import { EntrepriseComponentComponent } from './entreprise-component/entreprise-component.component';
import { ArticleComponentComponent } from './article-component/article-component.component';
import { AnnonceComponentComponent } from './annonce-component/annonce-component.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AnnonceComponent,
    ArticleComponent,
    EntrepriseComponent,
    EventComponent,
    FreelanceComponent,
    UserComponentComponent,
    FreelanceComponentComponent,
    EventComponentComponent,
    EntrepriseComponentComponent,
    ArticleComponentComponent,
    AnnonceComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
