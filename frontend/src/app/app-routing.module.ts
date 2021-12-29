import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './forms/create-account/create-account.component';
import { JobOfferComponent } from './offers/job-offer.component';
//import { HomeComponent } from './home/home.component';

const routes: Routes =  [
    //{ path: '',  component: HomeComponent},
    { path: 'create-account', component: CreateAccountComponent },
    { path: 'job-offer', component: JobOfferComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
