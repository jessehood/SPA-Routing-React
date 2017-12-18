import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Link, NavLink } from 'react-router-dom';
import { Provider } from 'react-redux';
import axios from 'axios';
import promiseMiddleware from 'redux-promise-middleware';
import moviesReducer from './reducers/movies';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import MovieList from './components/MovieList/MovieList';
import Header from './components/Header/Header';
import MovieDetailed from './components/MovieDetailed/MovieDetailed';

const reducer = combineReducers({
  movies: moviesReducer
});

const store = createStore(reducer, applyMiddleware(
  promiseMiddleware()
));


ReactDOM.render(
<Provider store={store}>
    <BrowserRouter>
      <div>
        <Header />
        <Route path="/movies/:id" component={MovieDetailed} />
        <Route path="/" component={MovieList} exact /> 
      </div>
    </BrowserRouter>
</Provider>, 
document.getElementById('root'));
