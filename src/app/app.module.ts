import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from "@ngrx/store"

import { AppComponent } from './app.component';
import { MovieComponent } from './components/movie/movie.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieService } from './services/movie.service';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { rootReducer } from './store';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MovieListComponent,
    MovieDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot(rootReducer)
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
