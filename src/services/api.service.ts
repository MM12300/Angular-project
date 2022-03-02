import { Injectable } from '@angular/core';
import {catchError, Observable, throwError} from "rxjs";
import {Movie, MovieComment} from "../interfaces/movies";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";

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

  getMovie(id: number): Observable<Movie> {
    return this.http
      .get<Movie>(
        `https://movie-api.benoithubert.me/movies/${id}`
      )
      .pipe(
        catchError(error => this.handleError(error))
      );
  }

  createComment(commentData : MovieComment, id:number): Observable<MovieComment> {
    return this.http
      .post<MovieComment>(
        `https://movie-api.benoithubert.me/movies/${id}/comments`,
        commentData,
      )
      .pipe(
        catchError(error => this.handleError(error))
      );
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.status === 0) {
      errorMessage = 'A network error occurred. Please come back later';
    }
      else if (error.status === 404) {
      errorMessage = 'This movie does not exist anymore.';
    } else if (error.status === 400) {
      errorMessage = 'There are missing or misformated fields.';
    } else {
      errorMessage = 'An unexpected error occurred.';
    }
    return throwError(errorMessage);
  }


}
