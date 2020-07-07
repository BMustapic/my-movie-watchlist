import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Movie, Saved } from 'src/app/models/Movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-save-movie',
  templateUrl: './save-movie.component.html',
  styleUrls: ['./save-movie.component.scss'],
})
export class SaveMovieComponent implements OnInit {
  @Input() movieToSave: Movie;
  comment: string;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
  }

  saveMovieToList(): void {
    const savedMovie = new Saved();
    savedMovie.movie = this.movieToSave;
    savedMovie.comment = this.comment;

    this.movieService.addSavedMovie(savedMovie);
    document.getElementById('modal_closing').click();
  }
}
