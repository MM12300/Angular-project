import { Component, OnInit } from '@angular/core';
import {Movie} from "../../interfaces/movies";
import {ApiService} from "../../services/api.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  movie!: Movie;

  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.apiService.getMovie(id).subscribe({
      next: (movie: Movie) => {
        this.movie = movie;
      },
      error: (error: string) => {
        console.error(error);
      }
    });

  }

}
