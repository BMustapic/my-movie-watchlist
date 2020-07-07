import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../models/Movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: '[app-movie-item]',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss'],
})
export class MovieItemComponent implements OnInit {
  @Input() movie: Movie;

  save: boolean;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.save = false;
  }

  onSave = (movie: Movie) => {
    this.save = true;
  }
}
