import { Component, OnInit } from '@angular/core';
import {MovieGenre} from "../../interfaces/movies";
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public genres!: MovieGenre[]

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getAllMovieGenres().subscribe(genres =>{
      this.genres = genres;
    })
  }
  }
