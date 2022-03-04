import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import {HttpClientModule} from "@angular/common/http";
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieAddCommentComponent } from './movie-add-comment/movie-add-comment.component';
import {ReactiveFormsModule} from "@angular/forms";
import { SidebarComponent } from './sidebar/sidebar.component';
import { MovieByGenderComponent } from './movie-by-gender/movie-by-gender.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    MovieCardComponent,
    MovieDetailComponent,
    MovieAddCommentComponent,
    SidebarComponent,
    MovieByGenderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
