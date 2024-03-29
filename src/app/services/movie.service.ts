import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie, Results, Saved } from '../models/Movie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  apiKey: string = 'api_key=95d091807075bbbc0e231760cb20bb94';
  recommendedMoviesUrl: string = 'https://api.themoviedb.org/3/discover/movie';
  searchMoviesUrl: string = 'https://api.themoviedb.org/3/search/movie';

  private _savedMovies: Saved[] = [];
  private _movieToSave: Movie = new Movie();
  private index: number = 0;

  addMovieToSave(movie: Movie): void {
    this._movieToSave = movie;
  }

  getMovieToSave(): Movie {
    return this._movieToSave;
  }

  addSavedMovie(movie: Saved): void {
    if (!this._savedMovies.find((m) => m.movie.id === movie.movie.id)) {
      this._savedMovies.push(movie);
    }
  }

  getSavedMovies(): Saved[] {
    return this._savedMovies;
  }

  removeSavedMovie(movie: Saved): void {
    this._savedMovies = this._savedMovies.filter((m) => m !== movie);
  }

  constructor(private httpClient: HttpClient) {}

  getRecommendedMovies = (): Observable<Results> =>
    this.httpClient.get<Results>(`${this.recommendedMoviesUrl}?${this.apiKey}`)

  searchMovies = (title: string): Observable<Results> =>
    title === ''
      ? this.httpClient.get<Results>(
          `${this.recommendedMoviesUrl}?${this.apiKey}`
        )
      : this.httpClient.get<Results>(
          `${this.searchMoviesUrl}?${this.apiKey}&query=${title}`
        )

  sortByHeader = (sortString: string) => {
    this.index = this.counterToTwo(this.index);
    const sortingDirection =
      this.index === 0
        ? ''
        : this.index === 1
        ? `&sort_by=${sortString}.desc`
        : `&sort_by=${sortString}.asc`;
    console.log(sortingDirection);
    return this.httpClient.get<Results>(
      `${this.recommendedMoviesUrl}?${this.apiKey}${sortingDirection}`
    );
  }

  counterToTwo = (num: number) => {
    if (num + 1 > 2) {
      return 0;
    } else {
      return num + 1;
    }
  }
}
