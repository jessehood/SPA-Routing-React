import React from 'react';
import { connect } from 'react-redux';
import './MovieList.css';
import { getMovies } from '../../actions/movies';

class MovieList extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    movies: []
  }

  componentDidMount() {
    Promise.resolve(this.props.getMovies()).then((response) => {
      this.setState({movies: response.value.data});  
    });
  }

  render() {
    if (this.props.movies) {
      return (
        <div>
          <div>Movie List</div>
          {this.state.movies.map((movie, i) => {
            return (<div key={i}>{movie.title}</div>);
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