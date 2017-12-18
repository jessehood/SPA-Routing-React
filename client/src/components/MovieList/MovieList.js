import React from 'react';
import { connect } from 'react-redux';
import './MovieList.css';
import { getMovies } from '../../actions/movies';

class MovieList extends React.Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    const movie = this.props.getMovies();
    console.log(movie);
  }

  render() {
    if (this.props.movies) {
      return (
        <div>
          <div>Movie List</div>
          {[].map((movie, i) => {
            return (<div key={i}>{movie}</div>);
          })}
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return { movies: state.movies };
};


export default connect(mapStateToProps, { getMovies })(MovieList);