export class Movie {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
  overview: string;
  vote_average: number;
}

export class Results {
  results: Movie[];
}

export class Saved {
  movie: Movie;
  comment: string;
}