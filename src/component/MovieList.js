import React from 'react'
import MovieCard from './MovieCard.js'


function MovieList ({movies,title,rate}) {
  return (
    <div style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap",margin:"auto",width:"90%"}}>

        {movies.filter(film=>
        film.title.toLowerCase().includes(title.toLowerCase())
        
        ).map(film=>(
        <MovieCard  film={film}key={film} />))}
    </div>
  );
}

export default MovieList
