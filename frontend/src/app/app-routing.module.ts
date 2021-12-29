import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './forms/create-account/create-account.component';
//import { HomeComponent } from './home/home.component';

const routes: Routes =  [
    //{ path: '',  component: HomeComponent},
    { path: 'create-account', component: CreateAccountComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
