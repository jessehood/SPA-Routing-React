import axios from 'axios';

export const GET_MOVIES = 'GET_MOVIES';
export const ADD_MOVIE = 'ADD_MOVIE';
export const GET_MOVIE_BY_ID = 'GET_MOVIE_BY_ID';

export const getMovies = () => {
  return (dispatch) => {
    axios.get('http://localhost:5000/api/movies')
    .then(
      movies => dispatch({type: 'GET_MOVIES_SUCCESS', payload: movies}),
      err => dispatch({type: 'GET_MOVIES_ERROR', err})
    );
  }
};


export const addMovie = (movie) => {
  const addMovie = axios.post('http://localhost:5000/api/movies', movie);
  return {
    type: ADD_MOVIE,
    payload: addMovie
  }
};

export const getMovieById = (id) => {
  const movieById = axios.get('http://localhost:5000/api/movies/' + id);
  return {
    type: GET_MOVIE_BY_ID,
    payload: movieById
  }
}