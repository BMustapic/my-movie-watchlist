import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss'],
})
export class SearchMovieComponent implements OnInit {
  @Output() searchMovies: EventEmitter<any> = new EventEmitter();

  title: string;

  constructor() {}

  ngOnInit(): void {}

  onSubmit = () => {
    this.searchMovies.emit(this.title);
  }
}
