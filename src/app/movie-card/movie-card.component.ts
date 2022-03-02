import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Movie} from "../../interfaces/movies";

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MovieCardComponent implements OnInit {

  @Input() movie!: Movie;

  constructor() { }

  ngOnInit(): void {
  }

}
