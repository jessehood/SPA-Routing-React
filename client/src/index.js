import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Link, NavLink } from 'react-router-dom';
import { Provider } from 'react-redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import promiseMiddleware from 'redux-promise';
import moviesReducer from './reducers/movies';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import MovieList from './components/MovieList/MovieList';

const reducer = combineReducers({
  movies: moviesReducer
});

const client = axios.create({
  baseURL: 'http://localhost:5000/api',
  responseType: 'json'
});

const store = createStore(reducer, applyMiddleware(
  axiosMiddleware(client)
));


ReactDOM.render(
<Provider store={store}>
  <BrowserRouter>
    <Route path="/" component={MovieList} exact /> 
  </BrowserRouter>
</Provider>, document.getElementById('root'));
