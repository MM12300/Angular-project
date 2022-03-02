import { Component, OnInit } from '@angular/core';
import {Movie} from "../../interfaces/movies";
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss', './flexboxgrid.min.css', './sidebar.css']
})
export class HomepageComponent implements OnInit {

  public movies: Movie[] | undefined

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getAllMovies().subscribe(movies => {
      this.movies = movies;
    });
  }

}
