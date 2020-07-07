import { Component, OnInit } from '@angular/core';
import { Saved, Movie } from 'src/app/models/Movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.scss'],
})
export class MyListComponent implements OnInit {
  savedMovies: Saved[];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.savedMovies = this.movieService.getSavedMovies();
  }

  removeSaved = (saved: Saved) => {
    this.movieService.removeSavedMovie(saved);
    this.savedMovies = this.movieService.getSavedMovies();
  }
}
