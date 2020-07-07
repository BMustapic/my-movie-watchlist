import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { SearchMovieComponent } from './components/search-movie/search-movie.component';
import { MyListComponent } from './components/my-list/my-list.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { SaveMovieComponent } from './components/save-movie/save-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieItemComponent,
    SearchMovieComponent,
    MyListComponent,
    HeaderComponent,
    SaveMovieComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
