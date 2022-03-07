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

  public moviesByGenre!: Movie[];

  //Loader is used to avoid DOM elements flickering while subscribing to routes events
  //Without the loader we can see components DOM elements loading if there are too many movies to display
  public loader: boolean;

  constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router) {
    this.loader = false;
  }

  ngOnInit(): void {
  this.getMovies();
  this.router.events.subscribe((val) => {
    this.loader = true;
    setInterval(()=>{
      this.getMovies();
      this.loader = false;
    }, 750);
  });
  }


  getMovies(): string{
    const genre_id = Number(this.route.snapshot.paramMap.get('id'));
    this.apiService.getAllMovies().subscribe(movies => {
      this.moviesByGenre = movies.filter(movie => movie.genre_ids.includes(genre_id));
    });
    return "movies loaded";
  }
}
