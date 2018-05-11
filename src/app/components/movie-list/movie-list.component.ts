import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../models/movie'

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: Movie[]
  selected: Movie
  constructor(movieService: MovieService) {
    this.movies = movieService.getAll()
    this.selected = null
  }

  onSelectMovie(event){
    console.log(event)
    this.selected = event
  }

  ngOnInit() {
  }

}
