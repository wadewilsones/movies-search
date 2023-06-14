import './Movie.css';


export default function Movie(movie) {

    console.log(movie.movie.Title)

    return (
        <div> 
            <img src={`https://www.themoviedb.org/t/p/w1280/${movie.movie.Poster}`}></img>
            <h3>{movie.movie.Title}</h3>
            <h6>{movie.movie.Year}</h6>
        </div>
      );
}