import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Movie, MovieGenre} from "../../interfaces/movies";
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss', './flexboxgrid.min.css', './sidebar.css'],
  encapsulation: ViewEncapsulation.None,
})

export class HomepageComponent implements OnInit {

  public movies!: Movie[]
  public genres!: MovieGenre[]

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getAllMovies().subscribe(movies => {
      this.movies = movies;
    });
    this.apiService.getAllMovieGenres().subscribe(genres =>{
      this.genres = genres;
    })
  }

}
