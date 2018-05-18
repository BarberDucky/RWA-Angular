import { Action } from "@ngrx/store"
import { Movie } from "../../models/movie"
import { UPDATE_MOVIE, UpdateMovie } from "../actions";

const initialState: Movie[] = [
    {
        id: 0,
        title: 'King Arthur',
        year: 1992,
        rating: 10,
        awards: ['Academy Award']
    },
    {
        id: 1,
        title: 'King Barthur',
        year: 1992,
        rating: 10,
        awards: ['Academy Award']
    },
    {
        id: 2,
        title: 'King Carthur',
        year: 1992,
        rating: 10,
        awards: ['Academy Award']
    }

]

export default function (state: Movie[] = initialState, action: Action) {
    switch (action.type) {
        case UPDATE_MOVIE:
            {
                const {movie} = (action as UpdateMovie)
                return state.map(mov => mov.id === movie.id ?
                    movie:
                    mov
                )
            }
        default: {
            return state
        }
    }
}