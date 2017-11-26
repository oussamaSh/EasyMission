import { LoginComponent } from './components/user/login.component';
import { RegisterComponent } from './components/user/register.component';
import { AppComponent } from './app.component';
import {Routes,RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

export const router: Routes =[
{path : '',redirectTo : 'about',pathMatch : 'full'},
{path : 'login',component : LoginComponent},
{path : 'register',component : RegisterComponent}

];

export const routes : ModuleWithProviders = RouterModule.forRoot(router);