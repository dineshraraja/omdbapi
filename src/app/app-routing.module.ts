import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { ListmovieComponent } from './listmovie/listmovie.component';
import { ViewpageComponent } from './viewpage/viewpage.component';
import {error} from "./pageNotFound/error";

const routes: Routes = [
  { path: "", component: ListmovieComponent },
  { path: 'view/:slug', component: ViewpageComponent },
  {path:'**',component:error},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }