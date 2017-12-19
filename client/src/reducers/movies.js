import { GET_MOVIES_FULFILLED, ADD_MOVIE_FULFILLED, GET_MOVIE_BY_ID_FULFILLED } from '../actions/movies';
export default function(movies = [], action) {
  switch(action.type) {
    case 'GET_MOVIES_SUCCESS':
      console.log('s');
      return action.payload.data;
    case 'GET_MOVIES_FAILURE':
      console.log('f');
      return movies;
    default:
      return movies;
  }
}