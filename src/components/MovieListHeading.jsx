import React from "react";
class MovieListHeading extends React.Component {
  render() {
    return <h1 className="movie-list-heading">{this.props.heading}</h1>;
  }
}
export default MovieListHeading;
