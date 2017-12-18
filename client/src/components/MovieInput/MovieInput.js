import React from 'react';
import { connect } from 'react-redux';
import './MovieInput.css';
import { addMovie } from '../../actions/movies';
import { browserHistory } from 'react-router-dom';

class MovieInput extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    title: '',
    director: '',
    metascore: '',
    stars: ''
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  submit = (e) => {
    e.preventDefault();
    console.log(this.state);
    Promise.resolve(this.props.addMovie(this.state)).then(() => {
      setTimeout(() => {
      this.props.history.push('/')
      }, 50);
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submit}>
          <div>Title: </div>
          <div> <input name="title" onChange={this.handleChange} /> </div>
          <div>Director: </div>
          <div> <input name="director" onChange={this.handleChange}/> </div>
          <div>Metascore: </div>
          <div> <input name="metascore" onChange={this.handleChange}/> </div>
          <div>Stars: </div>
          <div> <input name="stars" onChange={this.handleChange}/> </div>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = () => {
  return {
    addMovie
  }
}

export default connect(null, mapDispatchToProps)(MovieInput);