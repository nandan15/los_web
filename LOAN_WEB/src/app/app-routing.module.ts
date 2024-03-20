import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//Other Imports if its a component only


const routes: Routes = [
  {path:"dashboard",loadChildren:()=>import('../app/modules/dashboard/dashboard.module').then(m=>m.DashboardModule)},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
