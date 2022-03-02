import {Component, Input, OnInit} from '@angular/core';
import {ApiService} from "../../services/api.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Movie, MovieComment} from "../../interfaces/movies";

@Component({
  selector: 'app-movie-add-comment',
  templateUrl: './movie-add-comment.component.html',
  styleUrls: ['./movie-add-comment.component.scss']
})

export class MovieAddCommentComponent implements OnInit {

  @Input() movie!: Movie;
  movieForm: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.movieForm = this.fb.group({
      rating: '',
      text: '',
    })
  }
  error = '';

  ngOnInit(): void {
  }

  addComment(id : number) {
    const commentData = this.movieForm.value;

    this.apiService.createComment(commentData, id)
      .subscribe({
        next: movie => {
          console.log(`movie created with id`);
        },
        error: error => {
          this.error = error;
        }
      });

    this.movieForm.reset();
  }

}
