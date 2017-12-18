import axios from 'axios';

export const GET_MOVIES = 'GET_MOVIES';
export const GET_MOVIES_FULFILLED = 'GET_MOVIES_FULFILLED';
export const ADD_MOVIE = 'ADD_MOVE';
export const GET_MOVIE_BY_ID = 'GET_MOVIE_BY_ID';
export const GET_MOVIE_BY_ID_FULFILLED = 'GET_MOVIE_BY_ID_FULFILLED';

export const getMovies = () => {
  const movies = axios.get('http://localhost:5000/api/movies');
  return {
    type: GET_MOVIES,
    payload: movies
  }
};


export const addMovie = (movie) => {
  return {
    type: ADD_MOVIE,
    payload: movie
  }
};

export const getMovieById = (id) => {
  const movieById = axios.get('http://localhost:5000/api/movies/' + id);
  return {
    type: GET_MOVIE_BY_ID,
    payload: movieById
  }
}