import moviesReducer from './reducers/movies.reducer'
import selectedMovieReducer from './reducers/selected-movie.reducer'
import {Movie} from '../models/movie'
import {ActionReducerMap} from '@ngrx/store'

export interface State {
    movies: Movie[],
    selectedMovie: Movie
}

export const rootReducer: ActionReducerMap<State> = {
    movies: moviesReducer,
    selectedMovie: selectedMovieReducer
}