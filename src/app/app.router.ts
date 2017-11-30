import { LoginComponent } from './components/user/login.component';
import { RegisterComponent } from './components/user/register.component';
import { AppComponent } from './app.component';
import {Routes,RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import { EntrepriseComponent } from "./components/entreprise/entreprise.component";
import { EntrepriseAffichComponent } from './components/entreprise-affich/entreprise-affich.component';

export const router: Routes =[
{path : '',redirectTo : 'about',pathMatch : 'full'},
{path : 'login',component : LoginComponent},
{path : 'register',component : RegisterComponent},
{path : 'entreprise',component : EntrepriseComponent},
{path : 'entreprise-affich',component : EntrepriseAffichComponent}

];

export const routes : ModuleWithProviders = RouterModule.forRoot(router);