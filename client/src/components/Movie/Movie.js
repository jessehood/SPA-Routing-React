import React from 'react';
import { connect } from 'react-redux';
import './Movie.css';
import { Link } from 'react-router-dom';

class Movie extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="movie">
        <Link to={`/movies/${this.props.id}`}>
          {this.props.title}
        </Link>
      </div>
    );
  }
}

export default Movie;