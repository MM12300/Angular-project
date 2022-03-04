import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieByGenderComponent } from './movie-by-gender.component';

describe('MovieByGenderComponent', () => {
  let component: MovieByGenderComponent;
  let fixture: ComponentFixture<MovieByGenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieByGenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieByGenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
