import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/Movie';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  movies: Movie[];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getRecommendedMovies().subscribe((movies) => {
      console.log(movies);
      this.movies = movies.results;
    });
  }

  searchMovies = (title: string) => {
    this.movieService.searchMovies(title).subscribe((movies) => {
      this.movies = movies.results;
    });
  }

  sortByHeader = (sortString: string) => {
    this.movieService.sortByHeader(sortString).subscribe((movies) => {
      this.movies = movies.results;
    });
  }
}
