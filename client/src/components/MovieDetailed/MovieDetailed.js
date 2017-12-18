import React from 'react';
import { connect } from 'react-redux';
import './MovieDetailed.css';
import { Link } from 'react-router-dom';
import { getMovieById } from '../../actions/movies';

class MovieDetailed extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    title: '',
    director: '',
    metascore: '',
    stars: []
  }

  componentDidMount() {
    Promise.resolve(this.props.getMovieById(this.props.match.params.id)).then((movie) => {
      this.setState(movie.value.data);
    });
  }

  render() {
    return (
      <div className="movie-detailed">
        <ul>
          <li>Title: {this.state.title}</li>
          <li>Director: {this.state.director}</li>
          <li>Metascore: {this.state.metascore}</li>
          <li>Stars: {this.state.stars.join(", ")}</li>
        </ul>
      </div>
    );
  }
}



export default connect(null, { getMovieById })(MovieDetailed);