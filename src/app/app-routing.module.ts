import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MyListComponent } from './components/my-list/my-list.component';
import { SaveMovieComponent } from './components/save-movie/save-movie.component';

const routes: Routes = [
  { path: '', component: MovieListComponent },
  { path: 'my-list', component: MyListComponent },
  { path: 'save-movie', component: SaveMovieComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
