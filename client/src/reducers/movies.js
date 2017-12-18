import { GET_MOVIES, ADD_MOVIE, FIND_MOVIE_BY_ID } from '../actions/movies';
export default function(movies = [], action) {
  switch(action.type) {
    case 'GET_MOVIES_FULFILLED':
      console.log('get movie success');
      console.log(action);
      return action.payload;
    default:
      return movies;
  }
}