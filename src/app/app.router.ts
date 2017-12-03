import { RegisterComponent } from './components/user-components/register/register.component';
import { LoginComponent } from './components/user-components/login/login.component';

import { AppComponent } from './app.component';
import {Routes,RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import { AddComponent } from './components/entreprise-components/add/add.component';
import { ListComponent } from './components/entreprise-components/list/list.component';
import { DetailleComponent } from "./components/entreprise-components/detaille/detaille.component";
import { AddRecruiterComponent } from "./components/entreprise-components/add-recruiter/add-recruiter.component";

export const router: Routes =[
{path : '',component : LoginComponent},
{path : 'login',component : LoginComponent},
{path : 'register',component : RegisterComponent},
{path : 'add',component : AddComponent},
{path : 'list',component : ListComponent},
{path : 'add-recruiter',component : AddRecruiterComponent},
{path : 'detaille/:id',component :DetailleComponent }

];

export const routes : ModuleWithProviders = RouterModule.forRoot(router);