import axios from 'axios';

export const GET_MOVIES = 'GET_MOVIES';
export const ADD_MOVIE = 'ADD_MOVE';
export const GET_MOVIE_BY_ID = 'GET_MOVIE_BY_ID';

export const getMovies = () => {
  const movies = axios.get('http://localhost:5000/api/movies');
  return (dispatch) => {
    return movies.then(
      response => {
        dispatch({
          type: GET_MOVIES,
          payload: response
        });
      }
    )
  }
};


export const addMovie = (movie) => {
  return {
    type: ADD_MOVIE,
    payload: movie
  }
};

export const getMovieById = (id) => {
  return {
    type: GET_MOVIE_BY_ID,
    payload: {}
  }
}