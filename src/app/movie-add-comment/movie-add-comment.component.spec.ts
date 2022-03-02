import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieAddCommentComponent } from './movie-add-comment.component';

describe('MovieAddCommentComponent', () => {
  let component: MovieAddCommentComponent;
  let fixture: ComponentFixture<MovieAddCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieAddCommentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieAddCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
