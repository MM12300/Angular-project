import { Component, OnInit } from '@angular/core';
import {Movie} from "../../interfaces/movies";
import {ApiService} from "../../services/api.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-movie-by-gender',
  templateUrl: './movie-by-gender.component.html',
  styleUrls: ['./movie-by-gender.component.scss']
})
export class MovieByGenderComponent implements OnInit {

  public moviesByGenre!: Movie[]

  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    //location.reload();
    this.apiService.getAllMovies().subscribe(movies => {
      const genre_id = Number(this.route.snapshot.paramMap.get('id'));
      this.moviesByGenre = movies.filter(movie => movie.genre_ids.includes(genre_id));
    });

  }
}
