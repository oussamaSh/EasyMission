import { ProposalRequestsComponent } from './components/freelance-components/proposal-requests/proposal-requests.component';
import { MyProposalsFreelanceComponent } from './components/freelance-components/my-proposals-freelance/my-proposals-freelance.component';
import { SubmitProposalComponent } from './components/freelance-components/submit-proposal/submit-proposal.component';
import { AddFreelancejobComponent } from './components/freelance-components/add-freelancejob/add-freelancejob.component';
import { ManageFreelanceJobComponent } from './components/freelance-components/manage-freelance-job/manage-freelance-job.component';
import { FreelancejobDetailsComponent } from './components/freelance-components/freelancejob-details/freelancejob-details.component';
import { DisplayFreelanceJobsComponent } from './components/freelance-components/display-freelance-jobs/display-freelance-jobs.component';
import { RegisterComponent } from './components/user-components/register/register.component';
import { LoginComponent } from './components/user-components/login/login.component';

import { AppComponent } from './app.component';
import {Routes,RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import { EntrepriseComponent } from "./components/entreprise/entreprise.component";
import { EntrepriseAffichComponent } from './components/entreprise-affich/entreprise-affich.component';

export const router: Routes =[
{path : '',component : LoginComponent},
{path : 'login',component : LoginComponent},
{path : 'register',component : RegisterComponent},
{path : 'entreprise',component : EntrepriseComponent},
{path : 'entreprise-affich',component : EntrepriseAffichComponent},
{path : 'displayAllFreelanceJobs',component : DisplayFreelanceJobsComponent,},
{path : 'freelancejobDetails/:id',component : FreelancejobDetailsComponent},
{path : 'myPostedJobs',component : ManageFreelanceJobComponent},
{path : 'addFreelanceJob',component : AddFreelancejobComponent},
{path : 'submitFreelanceProposal/:id',component : SubmitProposalComponent},
{path : 'myProposals',component : MyProposalsFreelanceComponent},
{path : 'proposalRequests',component : ProposalRequestsComponent},
{path : 'acceptProposal',component : ProposalRequestsComponent}
];

export const routes : ModuleWithProviders = RouterModule.forRoot(router);