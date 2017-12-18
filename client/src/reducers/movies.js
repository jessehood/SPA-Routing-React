import { GET_MOVIES, GET_MOVIES_FULFILLED, ADD_MOVIE, GET_MOVIE_BY_ID_FULFILLED } from '../actions/movies';
export default function(movies = [], action) {
  switch(action.type) {
    case GET_MOVIES_FULFILLED:
      return action.payload;
    case GET_MOVIE_BY_ID_FULFILLED:
      return action.payload;
    default:
      return movies;
  }
}