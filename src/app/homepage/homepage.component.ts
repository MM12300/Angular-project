import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Movie, MovieGenre} from "../../interfaces/movies";
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class HomepageComponent implements OnInit {

  public movies!: Movie[]

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getAllMovies().subscribe(movies => {
      this.movies = movies;
    });

  }

}
