import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from "./homepage/homepage.component";
import {MovieDetailComponent} from "./movie-detail/movie-detail.component";
import {MovieByGenderComponent} from "./movie-by-gender/movie-by-gender.component";

const routes: Routes = [
  {path:'', component: HomepageComponent},
  {path: 'movie/:id', component: MovieDetailComponent},
  {path: 'genre/:id', component: MovieByGenderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
