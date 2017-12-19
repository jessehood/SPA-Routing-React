import React from 'react';
import { connect } from 'react-redux';
import './MovieList.css';
import { getMovies } from '../../actions/movies';
import Movie from '../Movie/Movie';
import { bindActionCreators } from 'redux';
class MovieList extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    movies: []
  }

  componentDidMount() {
    this.props.dispatch(getMovies());
  }

  render() {
    return (
      <div>
        <div>Movie List</div>
        {this.props.movies.map((movie, i) => {
          return (<Movie key={i} {...movie}/>);
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { movies: state.movies };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getMovies}, dispatch);
};

export default connect(mapStateToProps, null)(MovieList);