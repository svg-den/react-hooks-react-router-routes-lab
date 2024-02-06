import React from "react";
import { movies } from "../data";

function Movies() {
  return ( 
    <div style={styles.container}>
      <h1 style={styles.heading}>Movies Page</h1>
      {movies.map(movie => (
        <div key={movie.title} style={styles.movie}>
          <h2>{movie.title}</h2>
          <p>Time: {movie.time}</p>
          <ul>
            {movie.genres.map(genre =>(
              <li key={genre}>{genre}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

const styles = {
  heading: {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#801818'
  },
  movie: {
    marginBottom: '40px',
    border: '1px solid #ccc',
    padding: '10px',
    borderRadius: '5px',
  },
};

export default Movies;
