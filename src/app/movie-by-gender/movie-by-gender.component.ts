import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Movie} from "../../interfaces/movies";
import {ApiService} from "../../services/api.service";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-movie-by-gender',
  templateUrl: './movie-by-gender.component.html',
  styleUrls: ['./movie-by-gender.component.scss']
})
export class MovieByGenderComponent implements OnInit {

  public moviesByGenre!: Movie[]

  constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  this.getMovies();
  this.router.events.subscribe((val) => {
    this.getMovies();
  });
  }


  getMovies(){
    const genre_id = Number(this.route.snapshot.paramMap.get('id'));
    this.apiService.getAllMovies().subscribe(movies => {
      this.moviesByGenre = movies.filter(movie => movie.genre_ids.includes(genre_id));
    });
  }
}
