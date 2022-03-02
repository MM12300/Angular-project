import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Movie} from "../interfaces/movies";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http: HttpClient) { }

  getAllMovies(): Observable<Movie[]> {
    return this.http
      .get<Movie[]>(
        `https://movie-api.benoithubert.me/movies`
      );
  }
}
