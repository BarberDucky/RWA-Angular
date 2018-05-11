import { Movie } from '../models/movie'
import {Injectable} from '@angular/core'
@Injectable()
export class MovieService {
    private movies: Movie[];

    constructor() {
        this.movies = []
        this.movies.push(
            {
                title: 'King Arthur',
                year: 1992,
                rating: 10,
                awards: ['Academy Award']
            }
        )
        this.movies.push(
            {
                title: 'King Barthur',
                year: 1992,
                rating: 10,
                awards: ['Academy Award']
            }
        )
        this.movies.push(
            {
                title: 'King Carthur',
                year: 1992,
                rating: 10,
                awards: ['Academy Award']
            }
        )
    }
    public getAll(){
        return this.movies
    }
} 