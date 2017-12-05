
import { ProposalRequestsComponent } from './components/freelance-components/proposal-requests/proposal-requests.component';
import { MyProposalsFreelanceComponent } from './components/freelance-components/my-proposals-freelance/my-proposals-freelance.component';
import { SubmitProposalComponent } from './components/freelance-components/submit-proposal/submit-proposal.component';
import { AddFreelancejobComponent } from './components/freelance-components/add-freelancejob/add-freelancejob.component';
import { ManageFreelanceJobComponent } from './components/freelance-components/manage-freelance-job/manage-freelance-job.component';
import { FreelancejobDetailsComponent } from './components/freelance-components/freelancejob-details/freelancejob-details.component';
import { DisplayFreelanceJobsComponent } from './components/freelance-components/display-freelance-jobs/display-freelance-jobs.component';

import { ProfileComponent } from './components/user-components/profile/profile.component';
import { CandidatesComponent } from './components/user-components/candidates/candidates.component';

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

{path : 'displayAllFreelanceJobs',component : DisplayFreelanceJobsComponent,},
{path : 'freelancejobDetails/:id',component : FreelancejobDetailsComponent},
{path : 'myPostedJobs',component : ManageFreelanceJobComponent},
{path : 'addFreelanceJob',component : AddFreelancejobComponent},
{path : 'submitFreelanceProposal/:id',component : SubmitProposalComponent},
{path : 'myProposals',component : MyProposalsFreelanceComponent},
{path : 'proposalRequests',component : ProposalRequestsComponent},
{path : 'acceptProposal',component : ProposalRequestsComponent},

{path : 'candidates',component : CandidatesComponent},
{path : 'profile',component : ProfileComponent},
{path : 'add',component : AddComponent},
{path : 'list',component : ListComponent},
{path : 'add-recruiter',component : AddRecruiterComponent},
{path : 'detaille/:id',component :DetailleComponent }

];

export const routes : ModuleWithProviders = RouterModule.forRoot(router);